import { Router } from "express";
import MembershipPlan from "../models/MembershipPlan.js";

const router = Router();
router.get("/", async (_req, res, next) => {
  try { res.json(await MembershipPlan.find({ active: true }).sort({ order: 1 }).lean()); }
  catch (e) { next(e); }
});
export default router;