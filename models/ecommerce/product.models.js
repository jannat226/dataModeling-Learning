import mongoose from "mongoose ";
const productSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: { type: Number, default: 0, required: true },
    stock: { type: Number, default: 0, required: true },
    category: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", ""],
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
