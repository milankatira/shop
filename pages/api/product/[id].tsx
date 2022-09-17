import dbConnect from "../../../utils/mongoose";
import Product from "../../../model/product";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../../utils/sendEmail";

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

      await Product.findByIdAndUpdate(id, packet);

      const option = {
        email: "milankatira26@gmail.com",
        subject: "product update",
        message:
          products.quntity > 0
            ? `${products.name} is only ${products.quntity}`
            : `${products.name} is not available`,
      };
      await sendEmail(option);
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
