const paymentService = require('../services/payment');

exports.getPayments = (req, res) => {
    const payments = paymentService.getAllPayments();
    res.json({status: 200, data: payments});
};

exports.getPaymentById = (req, res) => {
    const payment = paymentService.getPaymentById(req.params.id);
    if (!payment) {
        return res.status(404).json({status: 404, message: "Payment not found"});
    }
    res.json({status: 200, data: payment});
};

exports.createPayment = (req, res) => {
    const newPayment = paymentService.createPayment(req.body);
    res.status(201).json({status: 201, data: newPayment});
};

exports.updatePayment = (req, res) => {
    const updatedPayment = paymentService.updatePayment(req.params.id, req.body);
    if (!updatedPayment) {
        return res.status(404).json({status: 404, message: "Payment not found"});
    }
    res.json({status: 200, data: updatedPayment});
};

exports.deletePayment = (req, res) => {
    const deleted = paymentService.deletePayment(req.params.id);
    if (!deleted) {
        return res.status(404).json({status: 404, message: "Payment not found"});
    }
    res.json({status: 200, message: "Payment deleted"});
};