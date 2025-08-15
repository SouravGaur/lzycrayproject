import { Router } from "express";
import { upload } from "../middelware/multer.middelware.js";
import { Property } from "../model/property.model.js";
const router = Router();
router
  .route("/")
  .post(upload.array("images", 20), async (req, res) => {
    try {
      const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

      const {
        type,
        bhk,
        bathrooms,
        furnishing,
        projectStatus,
        listedBy,
        superArea,
        carpetArea,
        maintenance,
        totalFloors,
        floorNo,
        carParking,
        facing,
        projectName,
        description,
        title,
        price,
        state,
        city,
        neighbourhood,
        sellerName,
        phoneNumber,
      } = req.body;

      // Property document create
      const property = new Property({
        type,
        bhk,
        bathrooms,
        furnishing,
        projectStatus,
        listedBy,
        superArea,
        carpetArea,
        maintenance,
        totalFloors,
        floorNo,
        carParking,
        facing,
        projectName,
        description,
        title,
        price,
        images: imagePaths,
        state,
        city,
        neighbourhood,
        sellerName,
        phoneNumber,
      });

      // Save to DB
      await property.save();

      res.status(201).json({
        success: true,
        message: "Property created successfully",
        data: property,
      });
    } catch (error) {
      console.error("Error creating property:", error);
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  })
  .get(async (req, res) => {
    try {
      // const { limit } = req.query;
      const properties = await Property.find().sort({ createdAt: -1 });
      // .limit(limit ? parseInt(limit) : 0);
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
export default router;
