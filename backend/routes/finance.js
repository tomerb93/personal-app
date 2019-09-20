const express = require('express');

const FinanceController = require('../controllers/finance');

const router = express.Router();

router.post('', FinanceController.createExpense);

router.get('', FinanceController.getFinances);

module.exports = router;
