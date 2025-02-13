import mongoose from "mongoose";
const sub_todoSchema = new mongoose.Schema(
  {
    content: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Sub_todo = mongoose.model("Sub_todo", sub_todoSchema);
