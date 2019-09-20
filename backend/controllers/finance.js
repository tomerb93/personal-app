const Finance = require('../models/finance');

exports.createExpenseOrDeposit = (req, res, next) => {
  if (req.body.typeId === 1) {
    const expense = new Finance({
      typeId: 1,
      amount: -req.body.expenseAmount,
      description: req.body.expenseDescription,
      dateCreated: req.body.dateCreated
    });
    expense.save().then((createdExpense) => {
      res.status(201).json({
        message: 'Created expense',
        createdExpense
      });
    });
  } else {
    const deposit = new Finance({
      typeId: 2,
      description: req.body.depositDescription,
      amount: req.body.depositAmount,
      dateCreated: req.body.dateCreated
    });
    deposit.save().then(() => {
      res.status(201).json();
    });
  }
};

exports.getFinances = (req, res, next) => {
  Finance.find().then((finances) => {
    res.status(200).json({
      finances: finances
    });
  });
};
