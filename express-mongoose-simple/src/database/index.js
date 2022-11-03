// @ts-check
import mongoose from "mongoose";
import { getEnv } from "../config/index.js";
import { MONGODB_URI } from "../constants/variable.js";

export const dbConnect = () => {
  const uri = getEnv(MONGODB_URI) || "";
  return mongoose.connect(uri);
};
