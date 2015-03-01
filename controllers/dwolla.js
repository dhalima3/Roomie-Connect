var Dwolla = require('dwolla-node')('o/mI8+rHHlGNRx0O0D0STPpmOYttDXETIQhz54+RaGTeUUR3ok', 'GC8p/uh2a0huIP5yjK/fHfofFsRP9IFlAvxcfwWRGdJ9T6rqH+'); // initialize API client
// var $ = require('seq');
var express = require('express');
var app = express();

// Some constants...
var redirect_uri = 'http://localhost:3000/apptemp';

// use sandbox API environment
Dwolla.sandbox = true;

/**
 * STEP 1: 
 *   Create an authentication URL
 *   that the user will be redirected to
 * 
 *   Visit http://localhost:3000/ to see it in action.
 **/
exports.getAuthenticationURL = function(req, res) {
    var authUrl = Dwolla.authUrl(redirect_uri);

    return res.send('To begin the OAuth process, send the user off to <a href="' + authUrl + '">' + authUrl + '</a>');
};

/**
 * STEP 2:
 *   Exchange the temporary code given
 *   to us in the querystring, for
 *   an access token and refresh token.
 **/
exports.exchangeTempCode = function(req, res) {
    var code = req.query.code;

    Dwolla.finishAuth(code, redirect_uri, function(error, auth) {
        var output = "Your OAuth access_token is: <b>" + auth.access_token + "</b>, which will expire in " + auth.expires_in + " seconds.<br>Your refresh_token is: <b>" + auth.refresh_token + "</b>, and that'll expire in " + auth.refresh_expires_in + " seconds.";
        output += '<br><a href="/refresh?refreshToken=' + encodeURIComponent(auth.refresh_token) + '">Click here to get a new access and refresh token pair!</a>';
        Dwolla.setToken(auth.access_token);
        return res.send(output);
    });
};

exports.sendMoney = function(req, res) {
	// optional params:
	var params = {
	  destinationType: 'Email', 
	  notes: 'Thanks for the coffee!'
	};

	Dwolla.send(7890, 'abhishek1@email.com', 1.00, params, function(err, data) {
	   if (err) { console.log(err); }
	   console.log(data);
	});
};