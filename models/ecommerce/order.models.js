import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Type.ObjecId,
      ref: "Product",
    },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Type.ObjecId,
      required: true,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    delivery,
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
