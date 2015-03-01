var Bill = require('../models/Bill');
// var Communication = require('../Communication');

/**
 * GET a single bill /bills
 * List one single bills.
 */

exports.getBill = function(req, res) {
  Bill.findById(req.params.bill_id, function(err,bill){

  	if (err)
  		res.send(err);
  	res.json(bill);
  });
};

/**
 * PUT /bills
 * Edit/put one single bills.
 */

exports.editBill = function(req, res) {
  Bill.findById(req.params.bill_id, function(err,bill){

  	if (err)
  		res.send(err);

  	//update the bill
  	bill.name = req.body.name;
  	bill.lastPerson = req.body.lastPerson;
  	bill.amount = req.body.amount;
	bill.daysInBetween = req.body.daysInBetween;
	bill.finished = req.body.finished;
	bill.lastDate = req.body.lastDate;
  	bill.repeated = req.body.repeated;
  	bill.descrip = req.body.descrip;

	//save the bill
	bill.save(function(err) {
		if (err)
			res.send(err);
  //update with notifications
  // Communication.communicate(bill);

		res.json({ message: "Bill updated!" });
	});
  });
};

/**
 * GET ALL /bills
 * List all bills.
 */

exports.getAllBills = function(req, res) {
  Bill.find(function(err, docs) {
    // res.render('bills', { bills: docs });
    res.json(docs);
  });
};

/**
 * POST /bills
 * Add new bills.
 */

exports.postBills = function(req, res) {	
	var bill = new Bill();
	bill.name = req.body.name;
	bill.lastPerson = req.body.lastPerson;
	bill.amount = req.body.amount;
	bill.daysInBetween = 0;
	bill.finished = req.body.finished;
	bill.lastDate = new Date();
  	bill.repeated = false;
  	bill.descrip = "";
  	bill.sent = false;

	//Save the bill
	bill.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Bill created!'});
	});
};

/**
 * DELETE /bills
 * Delete bills.
 */
 exports.deleteBills = function(req, res) {
 	Bill.remove({
 		_id : req.params.bill_id
 	}, function(err, todo) {
 		if (err)
 			res.send(err);

 		// Bill.find(function(err, bills) {
 		// 	if (err)
 		// 		res.send(err)
 		// 	res.json(bills);
 		// });
 		res.json({ message: 'Successfully deleted'});
 	});
 };
