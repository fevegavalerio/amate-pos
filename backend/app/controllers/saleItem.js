const saleItemService = require('../services/saleItem');

exports.getSaleItems = (req, res) => {
    const saleItems = saleItemService.getAllSaleItems();
    res.json({status: 200, data: saleItems});
};

exports.getSaleItemById = (req, res) => {
    const saleItem = saleItemService.getSaleItemById(req.params.id);
    if (!saleItem) {
        return res.status(404).json({status: 404, message: "Sale item not found"});
    }
    res.json({status: 200, data: saleItem});
};

exports.createSaleItem = (req, res) => {
    const newSaleItem = saleItemService.createSaleItem(req.body);
    res.status(201).json({status: 201, data: newSaleItem});
};

exports.updateSaleItem = (req, res) => {
    const updatedSaleItem = saleItemService.updateSaleItem(req.params.id, req.body);
    if (!updatedSaleItem) {
        return res.status(404).json({status: 404, message: "Sale item not found"});
    }
    res.json({status: 200, data: updatedSaleItem});
};

exports.deleteSaleItem = (req, res) => {
    const deleted = saleItemService.deleteSaleItem(req.params.id);
    if (!deleted) {
        return res.status(404).json({status: 404, message: "Sale item not found"});
    }
    res.json({status: 200, message: "Sale item deleted"});
};