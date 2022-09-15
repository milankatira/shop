import dbConnect from "../../../utils/mongoose";
import Product from "../../../model/product";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "POST") {
    try {
      const products = await Product.findByIdAndUpdate(id, req.body);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
