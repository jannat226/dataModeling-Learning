import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //the one that is inside the mongoose.Schema()
    },
    subtodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub_todo",
      },
    ],
  },
  { timestamps: true }
);
export const Todo = mongoose.model("Todo", todoSchema);
