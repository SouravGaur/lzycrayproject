import mongoose from "mongoose";

const connectDB = async () => {
  const DB_NAME = "lazydata";
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected! Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
