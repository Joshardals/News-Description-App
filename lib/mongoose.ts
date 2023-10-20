import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGO DB URL not found.");
  if (isConnected) return console.log("Already Connected to MONGO DB!");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
  } catch (error) {
    console.log("Connection Error:", error);
  }
};
