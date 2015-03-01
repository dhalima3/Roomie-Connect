var mongoose = require('mongoose');

var d = new Date();
var month = d.getMonth();
var day = d.getDay();

var choreSchema = new mongoose.Schema({
  name: { type: String, default: ''},
  lastPerson: { type: String, default: ''},
  daysInBetween: { type: Number, default: 0},
  finished: { type: Boolean, default: false},
  lastDate: {type: Date, default: new Date(month, day)},
  descrip: {type: String, default: ''},
  sent: {type: Boolean, default: false}
});

module.exports = mongoose.model('Chore', choreSchema);
