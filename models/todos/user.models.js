import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   isActive: Boolean,
// });

//or
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.Schema("User", userSchema);
