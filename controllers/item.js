var Item = require('../models/Item');

/**
 * GET a single item /items
 * List one single items.
 */

exports.getItem = function(req, res) {
  Item.findById(req.params.item_id, function(err,item){

  	if (err)
  		res.send(err);
  	res.json(item);
  });
};

/**
 * PUT /items
 * Edit/put one single items.
 */

exports.editItem = function(req, res) {
  Item.findById(req.params.item_id, function(err,item){

  	if (err)
  		res.send(err);

  	//update the item
  	item.name = req.body.name;
  	item.lastPerson = req.body.lastPerson;
	item.daysInBetween = req.body.daysInBetween;
	item.finished = req.body.finished;
	item.lastDate = req.body.lastDate;

	//save the item
	item.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: "Item updated!" });
	});
  });
};

/**
 * GET ALL /items
 * List all items.
 */

exports.getAllItems = function(req, res) {
  Item.find(function(err, docs) {
    res.render('items', { items: docs });
    // res.json(docs);
  });
};

/**
 * POST /items
 * Add new items.
 */

exports.postItems = function(req, res) {
 //  Item.create({
 //  	text: req.body.text,
	// lastPerson: req.body.person,
	// daysInBetween: 0,
	// lastDate: req.body.date
 //  }, function (err, item) {
 //  		if (err)
 //  			res.send(err);

 //  		Item.find(function(err, items) {
 //  			if (err)
 //  				res.send(err)
 //  			res.json(items);
 //  		});
 //  });
	
	//Create the item
	var item = new Item();
	item.name = req.body.name;
	item.lastPerson = req.body.lastPerson;
	item.daysInBetween = 0;
	item.finished = req.body.finished;
	item.lastDate = new Date();

	//Save the item
	item.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Item created!'});
	});
};

/**
 * DELETE /items
 * Delete items.
 */
 exports.deleteItems = function(req, res) {
 	Item.remove({
 		_id : req.params.item_id
 	}, function(err, todo) {
 		if (err)
 			res.send(err);

 		// Item.find(function(err, items) {
 		// 	if (err)
 		// 		res.send(err)
 		// 	res.json(items);
 		// });
 		res.json({ message: 'Successfully deleted'});
 	});
 };