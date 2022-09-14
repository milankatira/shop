var express = require("express");
var router = express.Router();

const {
  addProduct,
  deleteProduct,
  buyProduct,
} = require("./controller/product.controller.js");

router.post('/product', addProduct);
router.delete('/product', deleteProduct);
router.post('/buyproduct', buyProduct);

module.exports = router;
