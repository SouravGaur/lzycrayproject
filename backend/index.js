import "dotenv/config";
import express from "express";
import connectDB from "./controllers/dbconnect.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/routes/property.router.js";

const app = express();

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "public/temp")));

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed !!!", err);
  });

// routes
app.use("/api/properties", router);
app.get("/", (req, res) => {
  res.send("hlo everyone Server is Started");
});
