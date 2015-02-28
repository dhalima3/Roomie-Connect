var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: String,
  lastPerson: String,
  daysInBetween: Number,
  Amount: Number,
  picture: String,
  lastDate: {type: Date}
});

module.exports = mongoose.model('Item', itemSchema);