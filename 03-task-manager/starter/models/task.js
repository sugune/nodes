const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    trim: true,
    maxlength: [25, "name should be less than 20"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('task', taskSchema);