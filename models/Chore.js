var mongoose = require('mongoose');

var choreSchema = new Schema({
  name: String,
  responsibilities: String,
  lastPerson: String,
  daysInBetween: Number,
  lastDate: {type: Date}
});

module.exports = mongoose.model('Chore', choreSchema);