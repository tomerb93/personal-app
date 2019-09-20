const Finance = require('../models/finance');

exports.createExpense = (req, res, next) => {
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
};

exports.getFinances = (req, res, next) => {
  Finance.find().then((finances) => {
    res.status(200).json({
      finances: finances
    });
  });
};
