const { verifyToken } = require("../utils/token");
const { findById, toPublicUser } = require("../models/User");

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Missing or invalid authorization header." });
  }

  try {
    const payload = verifyToken(token);
    const user = findById(payload.sub);
    if (!user) {
      return res.status(401).json({ message: "Session is no longer valid." });
    }
    req.user = toPublicUser(user);
    next();
  } catch {
    return res.status(401).json({ message: "Session expired. Please log in again." });
  }
}

module.exports = { requireAuth };
