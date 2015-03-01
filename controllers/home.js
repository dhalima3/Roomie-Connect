/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.appTemp = function(req, res){
  res.render('appTemp', {
    title: 'App Temp'
  });
};