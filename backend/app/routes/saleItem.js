const saleItemController = require('../controllers/saleItem');
const router = require('express').Router();

router.get('/', saleItemController.getSaleItems);
router.get('/:id', saleItemController.getSaleItemById);
router.post('/', saleItemController.createSaleItem);
router.put('/:id', saleItemController.updateSaleItem);
router.delete('/:id', saleItemController.deleteSaleItem);

module.exports = router;