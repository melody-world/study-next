import { ObjectId } from "mongodb";
import { Schema } from "mongoose";

const mongoose = require("mongoose");

export const UserScheme = new Schema({
  _id: { type: ObjectId },
  userName: { type: String },
  roleCode: { type: String },
  createDate: { type: Date, default: Date.now },
});

export default mongoose.models.users || mongoose.model("users", UserScheme);
