var mongoose = require('mongoose');

var choreSchema = new mongoose.Schema({
  name: String,
  lastPerson: String,
  daysInBetween: Number,
  lastDate: {type: Date},
  repeated: Boolean,
  descrip: String,
  sent: Boolean
});

module.exports = mongoose.model('Chore', choreSchema);
