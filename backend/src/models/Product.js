import mongoose from "mongoose";


const schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, enum: ["qr_tag", "gps_tracker"], required: true },
  tagline: String,
  description: String,
  features: [String],
  specs: [{ label: String, value: String }],
  compatibility: String,
  warranty: String,
  image: String,
  price: Number,          // optional, client dega
  active: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Product", schema);