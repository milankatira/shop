import dbConnect from "../../../utils/mongoose";
import Product from "../../../model/product";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.find({ quantity: { $lt: 20 } });
      res.status(200).json({ product, message: "product fetch successfully" });
    } catch (err) {
      res.status(500).json(err);
    }
  }

}
