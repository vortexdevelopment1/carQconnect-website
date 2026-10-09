const fs = require('fs');
const path = require('path');

const dirs = [
  'src',
  'src/config',
  'src/models',
  'src/routes',
  'src/middleware',
  'src/scripts'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

const files = {
  'src/config/db.js': 'import mongoose from "mongoose";\n\nexport const connectDB = async () => {\n  try {\n    await mongoose.connect(process.env.MONGODB_URI);\n    console.log("? MongoDB Connected");\n  } catch (error) {\n    console.error("? MongoDB connection error:", error.message);\n    process.exit(1);\n  }\n};\n',
  'src/models/ContactMessage.js': 'import mongoose from "mongoose";\n\nconst contactSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  message: String\n}, { timestamps: true });\n\nexport default mongoose.model("ContactMessage", contactSchema);\n',
  'src/models/Product.js': 'import mongoose from "mongoose";\n\nconst productSchema = new mongoose.Schema({\n  name: String,\n  price: Number,\n  description: String\n});\n\nexport default mongoose.model("Product", productSchema);\n',
  'src/models/MembershipPlan.js': 'import mongoose from "mongoose";\n\nconst planSchema = new mongoose.Schema({\n  name: String,\n  price: Number,\n  features: [String]\n});\n\nexport default mongoose.model("MembershipPlan", planSchema);\n',
  'src/routes/contact.js': 'import express from "express";\nconst router = express.Router();\n\nrouter.post("/", (req, res) => {\n  res.json({ message: "Contact route" });\n});\n\nexport default router;\n',
  'src/routes/products.js': 'import express from "express";\nconst router = express.Router();\n\nrouter.get("/", (req, res) => {\n  res.json({ message: "Products route" });\n});\n\nexport default router;\n',
  'src/routes/membership.js': 'import express from "express";\nconst router = express.Router();\n\nrouter.get("/", (req, res) => {\n  res.json({ message: "Membership route" });\n});\n\nexport default router;\n',
  'src/middleware/errorHandler.js': 'export const errorHandler = (err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ message: err.message || "Server Error" });\n};\n',
  'src/scripts/seed.js': 'console.log("Seeding database...");\n',
  'src/app.js': 'import express from "express";\nimport cors from "cors";\nimport helmet from "helmet";\nimport contactRoutes from "./routes/contact.js";\nimport productRoutes from "./routes/products.js";\nimport membershipRoutes from "./routes/membership.js";\nimport { errorHandler } from "./middleware/errorHandler.js";\n\nconst app = express();\n\napp.use(helmet());\napp.use(cors());\napp.use(express.json());\n\napp.use("/api/contact", contactRoutes);\napp.use("/api/products", productRoutes);\napp.use("/api/membership", membershipRoutes);\n\napp.use(errorHandler);\n\nexport default app;\n',
  'src/server.js': 'import dotenv from "dotenv";\ndotenv.config();\nimport app from "./app.js";\nimport { connectDB } from "./config/db.js";\n\nconst PORT = process.env.PORT || 5000;\n\nconnectDB().then(() => {\n  app.listen(PORT, () => {\n    console.log(`?? Server running on port ${PORT}`);\n  });\n});\n'
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(filepath, content);
}

// Remove old server.js at root if exists
if (fs.existsSync('server.js')) fs.unlinkSync('server.js');
if (fs.existsSync('create-server.js')) fs.unlinkSync('create-server.js');

// Update package.json scripts to point to src/server.js
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.main = 'src/server.js';
pkg.scripts.dev = 'nodemon src/server.js';
pkg.scripts.start = 'node src/server.js';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

console.log('Structure created successfully!');
