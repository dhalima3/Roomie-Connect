var Chore = require('../models/Chore');

/**
 * GET /chores
 * List all chores.
 */

exports.getChores = function(req, res) {
  Chore.find(function(err, docs) {
    res.render('chores', { chores: docs });
  });
};

/**
 * POST /chores
 * Add new chores.
 */

exports.postChores = function(req, res) {
  Chore.create({
  	text: req.body.text,
	lastPerson: req.body.person,
	daysInBetween: 0,
	lastDate: req.body.date
  }, function (err, chore) {
  		if (err)
  			res.send(err);

  		Chore.find(function(err, chores) {
  			if (err)
  				res.send(err)
  			res.json(chores);
  		});
  });
};

/**
 * Delete /chores
 * Delete chores.
 */
 exports.deleteChores = function(req, res) {
 	Chore.remove({
 		_id : req.params.chore_id
 	}, function(err, todo) {
 		if (err)
 			res.send(err);

 		Chore.find(function(err, chores) {
 			if (err)
 				res.send(err)
 			res.json(chores);
 		});
 	});
 };