// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var oauthSignature = require("oauth-signature");
var unixTimestamp = require("unix-timestamp");
var request = require('request');
//var http = require('http');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads auth.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/auth.html"));
  });

  // POST route for creating a new auth
  app.put("/auth", function(req, res) {
  	var _this = this;
   console.log("post auth", req.body);

   var myTime = Math.floor(unixTimestamp.now());
   console.log("unixTimestamp", myTime);

   var httpMethod = 'GET',
    url = 'http://platform.fatsecret.com/rest/server.api',
    parameters = {

        oauth_consumer_key : "f1b3a606a7f04808a468ebcd2ab47b68",
		oauth_signature_method : "HMAC-SHA1",
		oauth_timestamp : myTime,
		oauth_nonce : "" + Math.floor(Math.random()*100000),
		oauth_version : "1.0",
		method : "profile.create",
		format : "json",
		user_id: req.body.user
    },
    consumerSecret = 'e98995b961c74331801a6d90a2de56c3',
    // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash 
    encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret),
    // generates a BASE64 encode HMAC-SHA1 hash 
    signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret,
        { encodeSignature: false});

    console.log("encodedSignature", encodedSignature);

    var fullUrl = url +
				"?oauth_consumer_key=" + parameters.oauth_consumer_key +
				"&oauth_signature_method=" + parameters.oauth_signature_method +
				"&oauth_timestamp=" + parameters.oauth_timestamp +
				"&oauth_nonce=" + parameters.oauth_nonce  +
				"&oauth_version=" + parameters.oauth_version +
				"&oauth_signature=" + encodedSignature +
				"&method=" + parameters.method+
				"&format=" + parameters.format+ 
				"&user_id=" + parameters.user_id;

	console.log("url")
	console.log(fullUrl);			
console.log("Fat Search GET profile.create START.....");


request(fullUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	console.log("Fat Search GET profile.create DONE !!!!!!!!!!");
    console.log(body);  
    var myBody = JSON.parse(body);
    console.log("body.profile.auth_token", myBody.profile.auth_token);
    req.body.user
    console.log("req.body.user", req.body.user);
		    
		var myTime = Math.floor(unixTimestamp.now());
		   console.log("unixTimestamp", myTime);

		   var httpMethod = 'GET',
		    url = 'http://platform.fatsecret.com/rest/server.api',
		    parameters = {

		        oauth_consumer_key : "f1b3a606a7f04808a468ebcd2ab47b68",
				oauth_signature_method : "HMAC-SHA1",
				oauth_timestamp : myTime,
				oauth_nonce : "" + Math.floor(Math.random()*100000),
				oauth_version : "1.0",
				method : "profile.request_script_session_key",
				format : "json",
				oath_token: myBody.profile.auth_token,
				user_id: req.body.user,
				expires : 55, 
				consume_within : 59,
				cookie: true
		    },
		    consumerSecret = 'e98995b961c74331801a6d90a2de56c3',
		    // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash 
		    encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret),
		    // generates a BASE64 encode HMAC-SHA1 hash 
		    signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret,
		        { encodeSignature: false});

		    console.log("encodedSignature", encodedSignature);

		    var fullUrl = url +
						"?oauth_consumer_key=" + parameters.oauth_consumer_key +
						"&oauth_signature_method=" + parameters.oauth_signature_method +
						"&oauth_timestamp=" + parameters.oauth_timestamp +
						"&oauth_nonce=" + parameters.oauth_nonce  +
						"&oauth_version=" + parameters.oauth_version +
						"&oauth_signature=" + encodedSignature +
						"&method=" + parameters.method+
						"&format=" + parameters.format+ 
						"&oath_token=" + parameters.oath_token +
						"&user_id=" + parameters.user_id +
						// 
						"&expires=" + parameters.expires +
						"&consume_within=" + parameters.consume_within +
						"&cookie=" + parameters.cookie;

			console.log("url");
			console.log(fullUrl);			
		console.log("Fat Search GET profile.request_script_session_key START.....");


    request(fullUrl, function (error2, response2, body2) {
		  if (!error && response.statusCode == 200) {
		  	console.log("Fat Search GET profile.request_script_session_key DONE !!!!!!!!!!");
		    console.log(body2) 
		    var myBody2 = JSON.parse(body2);



			    res.json({
			    	token : myBody.profile.auth_token,
			    	secret : myBody.profile.auth_secret,
			    	session_key : myBody2.profile.session_key
			    });
			  }
			})

  }
})


    
    
    
  });

};
