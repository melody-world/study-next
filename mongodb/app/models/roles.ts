import { ObjectId } from "mongodb";
import { Schema } from "mongoose";

const mongoose = require("mongoose");

export const RoleScheme = new Schema({
  _id: { type: ObjectId },
  roleName: { type: String },
});

export default mongoose.models.roles || mongoose.model("roles", RoleScheme);
