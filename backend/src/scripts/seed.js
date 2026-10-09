import "dotenv/config";
import mongoose from "mongoose";
import Product from "./models/Product.js";

await mongoose.connect(process.env.MONGODB_URI);
await Product.deleteMany({});
await Product.insertMany([
  { slug: "qr-safety-tag", name: "QR Safety Tag", type: "qr_tag", order: 1,
    tagline: "For everyday public contact",
    features: ["Public QR safety page", "Masked owner contact"] },
  { slug: "gps-tracker", name: "GPS Tracker", type: "gps_tracker", order: 2,
    tagline: "For movement visibility",
    features: ["Live location and trip history", "Geofence and movement alerts"] },
]);

console.log("Seeded");
await mongoose.disconnect();
