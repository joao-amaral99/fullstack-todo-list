const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Task', TaskSchema);