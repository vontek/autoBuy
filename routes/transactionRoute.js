const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/:id', transactionController.getTransaction);
router.post('/', transactionController.createTransaction);
router.get('/', transactionController.getAllTransactions);
router.delete('/:id', transactionController.deleteTransaction);
router.put('/:id', transactionController.updateTransaction);

module.exports = router;
