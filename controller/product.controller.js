const { ObjectId } = require("mongodb");
const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "id not found in db" });
      }
      res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "id is not valid" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } else {
      return res.status(404).json({ message: "id is not valid" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: "id not found in db" });
      }
      res.status(200).json({ message: "product deleted successfully" });
    } else {
      return res.status(404).json({ message: "id is not valid" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
