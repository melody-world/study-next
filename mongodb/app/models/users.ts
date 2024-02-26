import { ObjectId } from "mongodb";
import { Schema } from "mongoose";
const mongoose = require("mongoose");

export const AdminSchema = new Schema({
  _id: { type: ObjectId, required: true },
  userId: { type: String, required: true },
  userPassword: { type: String, required: true },
  userName: { type: String, required: true },
  roleCode: { type: String, default: "ROLE_ADMIN" },
  isResetPassword: { type: Boolean },
  churchCode: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
});

export default mongoose.models.admin_info || mongoose.model("admin_info", AdminSchema);
