import express from "express";
import cors from "cors";
import helmet from "helmet";
import contactRoutes from "./routes/contact.js";
import productRoutes from "./routes/products.js";
import membershipRoutes from "./routes/membership.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/products", productRoutes);
app.use("/api/membership", membershipRoutes);

app.use(errorHandler);

export default app;
