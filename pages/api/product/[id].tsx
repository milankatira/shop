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

  await dbConnect();

  if (method === "POST") {
    try {
      const products = await Product.findById(id);

      const updatedQuantity = products.quntity - req.body.quntity;
      if (updatedQuantity < 0) {
        if (products.quntity > 0) {
          throw new Error(
            `Product not avalable. only ${products.quntity} available`
          );
        }
        throw new Error(`Product not avalable.`);
      }
      const packet = {
        quntity: updatedQuantity,
      };

      const updatedProduct = await Product.findByIdAndUpdate(id, packet);

      res.status(200).json({ message: "product updated successfully" });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
