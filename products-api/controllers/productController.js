
const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.getFeatured = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.json(products);
};

exports.getByPrice = async (req, res) => {
  const products = await Product.find({ price: { $lt: req.params.value } });
  res.json(products);
};

exports.getByRating = async (req, res) => {
  const products = await Product.find({ rating: { $gt: req.params.value } });
  res.json(products);
};
