var mongoose = require('mongoose');
var Chore = require('../models/Chore');
var secrets = require('../config/secrets');
var Mailjet = require('mailjet-sendemail')

var mainLoop = ({
  //set up main communications loop
  var db = mongoose.connection;
  //fetch all of todays chores
  var allChores = Chore.where('daysInBetween').equals(0);

  var communicate = function(Chore)({
      //find user who must do the chore
      var userToFind = Chore.lastPerson;
      var currUser = User.findOne({'name.profile': userToFind}, function(err, User){
        if (err) return handleError(err);
      });

      //Twilio set up. Send SMS text.
      var client = require('twilio')(secrets.twilio.sid,
        secrets.twilio.token);
      client.messages.create({
        to: currUser.profile.phonenumber,
      	from: secrets.twilio.phone,
        body: "You have a chore today! Chore name:" //+ Chore.name
      }, function(err, message) {
      	console.log(message.sid);
      });


      //Mailjet set up
      var mailjetAPI = secrets.mailjet.apiKey;
      var mailjetSecret = secrets.mailjet.secret;
      var mailjet = new Mailjet(mailjetAPI, mailjetSecret);
      from = "jablonk@uchicago.edu"
      to = currUser.email
      subject = "Your Chores"
      type = "html"
      basicContent = "This is an automated e-mail to remind you of your roommate duties."
      choreContent = Chore.name + Chore.descrip;
      mailjet.sendContent(from, to, subject, type, content);

      //Interactive Intelligence set up

      var interactInt = secrets.interactInt;
      var interactapp = interactInt.appID;
      var interactkey = interactInt.apiKey;

      var http = new XMLHttpRequest();
      var url = "http://hackathonapi.inin.com/api" + interactapp +"/call/callandplaytts";
      var ttsmessage = "You have a chore! You must" + currentChore.name + currentChore.descrip;
      var data= {"number":currUser.profile.phonenumber, "message":ttsmessage};
      http.open("POST", url, true);

      http.setRequestHeader("Content-type", "application/json");
      http.setRequestHeader("Api-Key", apikey);
      http.send(JSON.stringify(data))

      return;
  });

  // while(true){
  //
  // }
});
