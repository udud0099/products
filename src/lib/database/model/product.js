import mongoose from "mongoose";

// Schema to our product table
const productModel = new mongoose.Schema({
  name: String,
  price: Number,
  weight: Number,
});

export const Product =
  mongoose.models.products || mongoose.model("products", productModel);
