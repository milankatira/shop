import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const productSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     quntity: {
//       type: Number,
//       required: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     alertquantity: {
//       type: Number,
//       required: true,
//     },

// },
//   { timestamps: true }
// );
// export default mongoose.model("product", productSchema);
// import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    quntity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    alertquantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
