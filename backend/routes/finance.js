const express = require('express');

const FinanceController = require('../controllers/finance');

const router = express.Router();

router.post('', FinanceController.createExpenseOrDeposit);

router.get('', FinanceController.getFinances);

module.exports = router;
