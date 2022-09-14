const product = require("../model/product");

exports.addProduct = async (req, res) => {
  try {
    const productData = await product.create(req.body);
    return res.status(200).json({
      status: true,
      data: productData,
      message: "product deleted successfully",
    });
  } catch (error) {
    return res.status(200).json({
      status: true,
      error,
      message: "error in product caretion",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await product.deleteById(req.body.id);
  } catch (error) {
    return res.status(200).json({
      status: true,
      error,
      message: "error in product caretion",
    });
  }
};

exports.buyProduct = async () => {
  try {
    await product.findByIdAndUpdate(req.body.id, req.body);
  } catch (error) {
    return res.status(200).json({
      status: true,
      error,
      message: "error in product deletion",
    });
  }
};
