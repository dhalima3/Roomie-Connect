var mongoose = require('mongoose');

var choreSchema = new mongoose.Schema({
  name: String,
  lastPerson: String,
  daysInBetween: Number,
  lastDate: {type: Date}
});

module.exports = mongoose.model('Chore', choreSchema);