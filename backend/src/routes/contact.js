import { Router } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false });

const body = z.object({
  name: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(3).max(120),
  topic: z.string().trim().max(60).optional(),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5).max(2000),
  website: z.string().optional(), // honeypot
});

router.post("/", limiter, async (req, res, next) => {
  try {
    const parsed = body.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Please check the form fields." });
    const { website, ...data } = parsed.data;
    if (website) return res.json({ ok: true }); // bot, chupchap ignore
    await ContactMessage.create(data);
    res.status(201).json({ ok: true });
  } catch (e) { next(e); }
});
export default router;