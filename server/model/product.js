const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
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

module.exports = mongoose.model("product", productSchema);
