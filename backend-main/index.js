import "dotenv/config";
import express from "express";
import connectDB from "./controllers/dbconnect.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import propertyRouter from "./src/routes/property.router.js";

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: "https://lzycrayproject-client.onrender.com", // frontend origin
    credentials: true, // allow cookies/auth headers
  })
);

// Static path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "public/temp")));

// Routes
app.use("/api/properties", propertyRouter);
app.get("/", (req, res) => res.send("Hello everyone! Server is started."));

// Connect DB and start server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
