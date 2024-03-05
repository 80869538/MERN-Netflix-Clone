import mongoose from "mongoose";
import Logger from "./logger";

const dbUrl = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    if (dbUrl) {
      Logger.info("Start connecting to Mongodb");
      await mongoose.connect(dbUrl);
      Logger.info("Mongodb connected");
    } else {
      throw Error("MONGODB_URL not provided");
    }
  } catch (err) {
    Logger.error({err});
  }
};
export default connectDB;
