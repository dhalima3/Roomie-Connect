var Chore = require('../models/Chore');

/**
 * GET a single chore /chores
 * List one single chores.
 */

exports.getChore = function(req, res) {
  Chore.findById(req.params.chore_id, function(err,chore){

  	if (err)
  		res.send(err);
  	res.json(chore);
  });
};

/**
 * PUT /chores
 * Edit/put one single chores.
 */

exports.editChore = function(req, res) {
  Chore.findById(req.params.chore_id, function(err,chore){

  	if (err)
  		res.send(err);

  	//update the chore
  	chore.name = req.body.name;
  	chore.lastPerson = req.body.lastPerson;
	chore.daysInBetween = req.body.daysInBetween;
	chore.finished = req.body.finished;
	chore.lastDate = req.body.lastDate;

	//save the chore
	chore.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: "Chore updated!" });
	});
  });
};

/**
 * GET ALL /chores
 * List all chores.
 */

exports.getAllChores = function(req, res) {
  Chore.find(function(err, docs) {
    // res.render('chores', { chores: docs });
    res.json(docs);
  });
};

/**
 * POST /chores
 * Add new chores.
 */

exports.postChores = function(req, res) {
 //  Chore.create({
 //  	text: req.body.text,
	// lastPerson: req.body.person,
	// daysInBetween: 0,
	// lastDate: req.body.date
 //  }, function (err, chore) {
 //  		if (err)
 //  			res.send(err);

 //  		Chore.find(function(err, chores) {
 //  			if (err)
 //  				res.send(err)
 //  			res.json(chores);
 //  		});
 //  });
	
	//Create the chore
	var chore = new Chore();
	chore.name = req.body.name;
	chore.lastPerson = req.body.lastPerson;
	chore.daysInBetween = 0;
	chore.finished = req.body.finished;
	chore.lastDate = new Date();

	//Save the chore
	chore.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Chore created!'});
	});
};

/**
 * DELETE /chores
 * Delete chores.
 */
 exports.deleteChores = function(req, res) {
 	Chore.remove({
 		_id : req.params.chore_id
 	}, function(err, todo) {
 		if (err)
 			res.send(err);

 		// Chore.find(function(err, chores) {
 		// 	if (err)
 		// 		res.send(err)
 		// 	res.json(chores);
 		// });
 		res.json({ message: 'Successfully deleted'});
 	});
 };