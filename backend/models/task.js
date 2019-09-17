const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dateCreated: { type: Date, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
