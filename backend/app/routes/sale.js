const saleController = require('../controllers/sale');
const router = require('express').Router();

router.get('/', saleController.getSales);
router.get('/:id', saleController.getSaleById);
router.post('/', saleController.createSale);
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);

module.exports = router;