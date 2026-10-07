const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return typeof email === "string" && EMAIL_RE.test(email);
}

function isValidPassword(password) {
  return typeof password === "string" && password.length >= 8;
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

module.exports = { isValidEmail, isValidPassword, isNonEmptyString };
