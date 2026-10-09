import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  priceLabel: String,     // jaise "Shown in the app"
  features: [String],
  highlighted: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("MembershipPlan", schema);