import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  contact: { type: String, required: true, trim: true, maxlength: 120 },
  topic: { type: String, trim: true, maxlength: 60 },
  subject: { type: String, trim: true, maxlength: 150 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  status: { type: String, enum: ["new", "in_progress", "closed"], default: "new" },
}, { timestamps: true });

export default mongoose.model("ContactMessage", schema);