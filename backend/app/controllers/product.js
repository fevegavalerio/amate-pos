const productService = require('../services/product');

exports.getProducts = (req, res) => {
    const products = productService.getAllProducts();
    res.json({status: 200, data: products});
};

exports.getProductById = (req, res) => {
    const product = productService.getProductById(req.params.id);
    if (!product) {
        return res.status(404).json({status: 404, message: "Product not found"});
    }
    res.json({status: 200, data: product});
};

exports.createProduct = (req, res) => {
    const newProduct = productService.createProduct(req.body);
    res.status(201).json({status: 201, data: newProduct});
};

exports.updateProduct = (req, res) => {
    const updatedProduct = productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
        return res.status(404).json({status: 404, message: "Product not found"});
    }
    res.json({status: 200, data: updatedProduct});
};

exports.deleteProduct = (req, res) => {
    const deleted = productService.deleteProduct(req.params.id);
    if (!deleted) {
        return res.status(404).json({status: 404, message: "Product not found"});
    }
    res.json({status: 200, message: "Product deleted"});
};