import { Property } from "../model/property.model.js";

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const BASE_URL = "http://localhost:8000";
    const imagePaths = req.files.map(
      (file) => `${BASE_URL}/uploads/${file.filename}`
    );
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
};

// Get all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
