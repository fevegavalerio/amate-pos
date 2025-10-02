const inventoryMovementService = require('../services/inventoryMovement');

exports.getInventoryMovements = (req, res) => {
    const movements = inventoryMovementService.getAllInventoryMovements();
    res.json({status: 200, data: movements});
};

exports.getInventoryMovementById = (req, res) => {
    const movement = inventoryMovementService.getInventoryMovementById(req.params.id);
    if (!movement) {
        return res.status(404).json({status: 404, message: "Inventory movement not found"});
    }
    res.json({status: 200, data: movement});
};

exports.createInventoryMovement = (req, res) => {
    const newMovement = inventoryMovementService.createInventoryMovement(req.body);
    res.status(201).json({status: 201, data: newMovement});
};

exports.updateInventoryMovement = (req, res) => {
    const updatedMovement = inventoryMovementService.updateInventoryMovement(req.params.id, req.body);
    if (!updatedMovement) {
        return res.status(404).json({status: 404, message: "Inventory movement not found"});
    }
    res.json({status: 200, data: updatedMovement});
};

exports.deleteInventoryMovement = (req, res) => {
    const deleted = inventoryMovementService.deleteInventoryMovement(req.params.id);
    if (!deleted) {
        return res.status(404).json({status: 404, message: "Inventory movement not found"});
    }
    res.json({status: 200, message: "Inventory movement deleted"});
};