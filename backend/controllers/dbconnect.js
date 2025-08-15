import mongoose from "mongoose";

const connectDB = async () => {
  const DB_NAME = "lazydata";
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("MongoDB connection error hi h", err);
    process.exit(1);
  }
};
export default connectDB;
