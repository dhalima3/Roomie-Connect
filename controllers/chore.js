/**
 * GET /chores
 * List all chores.
 */

exports.getChores = function(req, res) {
  Chores.find(function(err, docs) {
    res.render('chores', { chores: docs });
  });
};