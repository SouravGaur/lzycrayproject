import { Property } from "../model/property.model.js";

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const BASE_URL = "https://lzycrayproject-backend.onrender.com";
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
      subcategory,
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
      subcategory,
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

// Get a single property by ID
export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params; // get id from route
    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.json({
      success: true,
      data: property,
    });
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
