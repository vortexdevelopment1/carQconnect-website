import { Router } from "express";
import Product from "../models/Product.js";
const router = Router();

router.get("/", async (_req, res, next) => {
  try { res.json(await Product.find({ active: true }).sort({ order: 1 }).lean()); }
  catch (e) { next(e); }
});
router.get("/:slug", async (req, res, next) => {
  try {
    const p = await Product.findOne({ slug: req.params.slug, active: true }).lean();
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json(p);
  } catch (e) { next(e); }
});
export default router;