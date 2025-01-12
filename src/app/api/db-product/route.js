import { connectionString } from "@/lib/database/db_connection";
import { Product } from "@/lib/database/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionString);

  const productData = await Product.find();
  // get data from data base using GET method
  return NextResponse.json({ result: productData });
};

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectionString);
 
  const productData = new Product(payload);

  const response = await productData.save();
  return NextResponse.json({ result: response, success: true });
};
