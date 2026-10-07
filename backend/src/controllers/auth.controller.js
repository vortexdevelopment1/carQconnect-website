const { OAuth2Client } = require("google-auth-library");
const env = require("../config/env");
const { hashPassword, comparePassword } = require("../utils/password");
const { signToken } = require("../utils/token");
const { isValidEmail, isValidPassword, isNonEmptyString } = require("../utils/validate");
const { findByEmail, createUser, toPublicUser } = require("../models/User");

const googleClient = env.googleClientId ? new OAuth2Client(env.googleClientId) : null;

function issueSession(user) {
  const token = signToken({ sub: user.id });
  return { token, user: toPublicUser(user) };
}

async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body || {};

    if (!isNonEmptyString(name)) {
      return res.status(400).json({ message: "Please enter your full name." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }
    if (!isValidPassword(password)) {
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

    const existing = await findByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const passwordHash = await hashPassword(password);
    const user = await createUser({ name: name.trim(), email, passwordHash, provider: "password" });

    return res.status(201).json(issueSession(user));
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body || {};

    if (!isValidEmail(email) || !isNonEmptyString(password)) {
      return res.status(400).json({ message: "Enter your email and password." });
    }

    const user = await findByEmail(email);
    if (!user || !user.passwordHash) {
      return res.status(401).json({ message: "Incorrect email or password." });
    }

    const matches = await comparePassword(password, user.passwordHash);
    if (!matches) {
      return res.status(401).json({ message: "Incorrect email or password." });
    }

    return res.json(issueSession(user));
  } catch (err) {
    next(err);
  }
}

async function google(req, res, next) {
  try {
    if (!googleClient) {
      return res.status(501).json({
        message: "Google sign-in isn't configured on the server yet (set GOOGLE_CLIENT_ID).",
      });
    }

    const { accessToken, idToken } = req.body || {};
    if (!accessToken && !idToken) {
      return res.status(400).json({ message: "Missing Google credential." });
    }

    let profile;

    if (idToken) {
      // Verify a Google ID token (JWT credential from Google Identity Services).
      const ticket = await googleClient.verifyIdToken({
        idToken,
        audience: env.googleClientId,
      });
      const payload = ticket.getPayload();
      profile = { email: payload.email, name: payload.name || payload.email };
    } else {
      // Look up the profile using an OAuth2 access token (implicit flow).
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
      );
      if (!response.ok) {
        return res.status(401).json({ message: "Could not verify Google account." });
      }
      const data = await response.json();
      profile = { email: data.email, name: data.name || data.email };
    }

    if (!profile.email) {
      return res.status(401).json({ message: "Google account has no email to sign in with." });
    }
    let user = await findByEmail(profile.email);
     if (!user) {
      user = await createUser({ name: profile.name, email: profile.email, provider: "google" });
     }

    return res.json(issueSession(user));
  } catch (err) {
    next(err);
  }
}

async function me(req, res) {
  // req.user is populated by the requireAuth middleware.
  return res.json({ user: req.user });
}

async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body || {};
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Enter a valid email address." });
    }

    // Always respond with a generic success message so we never reveal
    // whether an email is registered. Wire this up to a real email
    // provider (SES, Postmark, SendGrid, etc.) to actually send the link.
    const user = await findByEmail(email);
    if (user) {
      console.log(`[password-reset] would send a reset email to ${email}`);
    }

    return res.json({ message: "If that account exists, a reset link is on its way." });
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, login, google, me, forgotPassword };
