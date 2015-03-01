var mongoose = require('mongoose');

var choreSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: String,
  lastPerson: String,
  daysInBetween: Number,
  lastDate: {type: Date},
  repeated: Boolean,
  descrip: String,
  sent: Boolean
=======
  name: { type: String, default: ''},
  lastPerson: { type: String, default: ''},
  daysInBetween: { type: Number, default: 0},
  finished: { type: Boolean, default: false},
  lastDate: {type: Date, default: new Date()}
>>>>>>> origin/master
});

module.exports = mongoose.model('Chore', choreSchema);
