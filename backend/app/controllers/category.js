const categoryService = require('../services/category');

exports.getCategories = (req, res) => {
    const categories = categoryService.getAllCategories();
    res.json({status: 200, data: categories});
};

exports.getCategoryById = (req, res) => {
    const category = categoryService.getCategoryById(req.params.id);
    if (!category) {
        return res.status(404).json({status: 404, message: "Category not found"});
    }
    res.json({status: 200, data: category});
};

exports.createCategory = (req, res) => {
    const newCategory = categoryService.createCategory(req.body);
    res.status(201).json({status: 201, data: newCategory});
};

exports.updateCategory = (req, res) => {
    const updatedCategory = categoryService.updateCategory(req.params.id, req.body);
    if (!updatedCategory) {
        return res.status(404).json({status: 404, message: "Category not found"});
    }
    res.json({status: 200, data: updatedCategory});
};

exports.deleteCategory = (req, res) => {
    const deleted = categoryService.deleteCategory(req.params.id);
    if (!deleted) {
        return res.status(404).json({status: 404, message: "Category not found"});
    }
    res.json({status: 200, message: "Category deleted"});
};