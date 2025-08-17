import mongoose from "mongoose";
const propertySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["Flat", "Independent Floor", "Farm House", "House/Villa"],
    },
    bhk: { type: String, required: true, enum: ["1", "2", "3", "4", "4+"] },
    bathrooms: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "4+"],
    },
    furnishing: {
      type: String,
      enum: ["Furnished", "Semi Furnished", "Unfurnished"],
      required: true,
    },
    projectStatus: {
      type: String,
      enum: ["New Launch", "Ready to Move", "Under Construction"],
      required: true,
    },
    listedBy: {
      type: String,
      enum: ["Builder", "Dealer", "Owner"],
      required: true,
    },
    superArea: { type: Number, required: true },
    carpetArea: { type: Number, required: true },
    maintenance: { type: Number },
    totalFloors: { type: Number },
    floorNo: { type: String },
    carParking: { type: String, required: true, enum: ["0", "1", "2", "3+"] },
    facing: {
      type: String,
      enum: [
        "North",
        "South",
        "East",
        "West",
        "North-East",
        "North-West",
        "South-East",
        "South-West",
      ],
    },
    projectName: { type: String },
    description: { type: String },
    title: { type: String, required: true },
    price: { type: String, required: true },
    images: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one image is required",
      },
      required: true,
    },
    state: { type: String, required: true },
    city: { type: String, required: true },
    neighbourhood: { type: String, required: true },
    sellerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    subcategory: { type: String, required: true },
  },
  { timestamps: true }
);
export const Property = mongoose.model("Property", propertySchema);
