const express = require("express");
const rateLimit = require("express-rate-limit");
const controller = require("../controllers/auth.controller");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// Basic brute-force protection on credential-guessing endpoints.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts. Please try again later." },
});

router.post("/signup", authLimiter, controller.signup);
router.post("/login", authLimiter, controller.login);
router.post("/google", authLimiter, controller.google);
router.post("/forgot-password", authLimiter, controller.forgotPassword);
router.get("/me", requireAuth, controller.me);

module.exports = router;
