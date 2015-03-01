var mongoose = require('mongoose');
var Chore = require('../models/Chore');
var User = require('../models/User');
var secrets = require('../config/secrets');
var Mailjet = require('mailjet-sendemail');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var mainLoop = function(){
//set up main communications loop
  mongoose.connect('mongodb://localhost/test');
  var db = mongoose.connection;

setInterval(function(){
}, 1000);
  var communicate = function(Chore){
      if (Chore.sent === true)
        return;
      //find user who must do the chore
      var userToFind = Chore.lastPerson;

      User.findOne({'profile.name': Chore.lastPerson}, function(err, currUser){
        if (err) return handleError(err);

      //Twilio set up. Send SMS text.
      var client = require('twilio')(secrets.twilio.sid,
        secrets.twilio.token);
      client.messages.create({
        to: currUser.profile.phoneNumber,
      	from: secrets.twilio.phone,
        body: "You have a chore today! Chore name: " + Chore.name
      }, function(err, message) {
      	console.log(message.sid);
      });

      //Mailjet set up
      var mailjetAPI = secrets.mailjet.apiKey;
      var mailjetSecret = secrets.mailjet.secret;
      var mailjet = new Mailjet(mailjetAPI, mailjetSecret);
      from = "jablonk@uchicago.edu" //example domain e-mail
      to = currUser.email
      subject = "Your Chores"
      type = "html"
      basicContent = "This is an automated e-mail to remind you of your roommate duties."
      choreContent = Chore.name + Chore.descrip;
      mailjet.sendContent(from, to, subject, type, basicContent + choreContent);

    //Interactive Intelligence set up

      var interactInt = secrets.interactInt;
      //var interactapp = interactInt.appID;
      var interactkey = "ee81bbe89124b6ea14adcff504"; //interactInt.apiKey;

      var http = new XMLHttpRequest();
      var url = "http://hackathonapi.inin.com/api/442689/call/callandplaytts";
      var ttsmessage = "hello"; //"You have a chore! You must  " + Chore.name;
      var data= {"number": "8583535978", "message":ttsmessage};
      http.open("POST", url, true);

      http.setRequestHeader("Content-type", "application/json");
      http.setRequestHeader("Api-Key", interactkey);
      http.send(JSON.stringify(data));
      console.log(JSON.stringify(data));
      console.log("I have sent all the data");
      //Change status to reflect that you already sent a notification
      Chore.sent = true;
      return;
    });
  };


  // var userKyle = new User({'profile': {'name': 'Kyle', 'phoneNumber': '8583535978'},
  //  'email': 'kylejablon@uchicago.edu'});
  // userKyle.save();
  // var userSam = new User({'profile': {'name': 'Sam', 'phoneNumber': '3037209931'},
  //  'email': 'samjbaugh@uchicago.edu'});
  // userSam.save();
  //
  // var newChore = new Chore({'name': 'Laundry', 'lastPerson': 'Kyle'});
  // newChore.save();
  //
  // var choreForSam = new Chore({'name': 'Oppress the masses', 'lastPerson': 'Sam'})
  // choreForSam.save();
  //
  //
  //
  // communicate(newChore);

// };
