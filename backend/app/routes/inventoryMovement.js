const inventoryMovementController = require('../controllers/inventoryMovement');
const router = require('express').Router();

router.get('/', inventoryMovementController.getInventoryMovements);
router.get('/:id', inventoryMovementController.getInventoryMovementById);
router.post('/', inventoryMovementController.createInventoryMovement);
router.put('/:id', inventoryMovementController.updateInventoryMovement);
router.delete('/:id', inventoryMovementController.deleteInventoryMovement);

module.exports = router;