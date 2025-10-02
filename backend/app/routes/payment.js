const paymentController = require('../controllers/payment');
const router = require('express').Router();

router.get('/', paymentController.getPayments);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.createPayment);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;