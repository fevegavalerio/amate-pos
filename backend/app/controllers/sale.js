const saleService = require('../services/sale');

exports.getSales = (req, res) => {
    const sales = saleService.getAllSales();
    res.json({status: 200, data: sales});
};

exports.getSaleById = (req, res) => {
    const sale = saleService.getSaleById(req.params.id);
    if (!sale) {
        return res.status(404).json({status: 404, message: "Sale not found"});
    }
    res.json({status: 200, data: sale});
};

exports.createSale = (req, res) => {
    const newSale = saleService.createSale(req.body);
    res.status(201).json({status: 201, data: newSale});
};

exports.updateSale = (req, res) => {
    const updatedSale = saleService.updateSale(req.params.id, req.body);
    if (!updatedSale) {
        return res.status(404).json({status: 404, message: "Sale not found"});
    }
    res.json({status: 200, data: updatedSale});
};

exports.deleteSale = (req, res) => {
    const deleted = saleService.deleteSale(req.params.id);
    if (!deleted) {
        return res.status(404).json({status: 404, message: "Sale not found"});
    }
    res.json({status: 200, message: "Sale deleted"});
};