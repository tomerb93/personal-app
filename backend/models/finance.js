const mongoose = require('mongoose');

const financeSchema = mongoose.Schema({
  typeId: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  dateCreated: { type: Date, required: true }
});

module.exports = mongoose.model('Finance', financeSchema);
