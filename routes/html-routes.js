// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var oauthSignature = require("oauth-signature");
var unixTimestamp = require("unix-timestamp");
var http = require('http');

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
   console.log("post auth", req.body);

   var myTime = Math.floor(unixTimestamp.now());
   console.log("unixTimestamp", myTime);

   var httpMethod = 'GET',
    url = 'http://platform.fatsecret.com/rest/server.api',
    parameters = {

        oauth_consumer_key : "f1b3a606a7f04808a468ebcd2ab47b68",
		oauth_signature_method : "HMAC-SHA1",
		oauth_timestamp : myTime,
		oauth_nonce : "1234",
		oauth_version : "1.0",
		method : "profile.create"
    },
    consumerSecret = 'e98995b961c74331801a6d90a2de56c3',
    // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash 
    encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret),
    // generates a BASE64 encode HMAC-SHA1 hash 
    signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret,
        { encodeSignature: false});

    console.log("encodedSignature", encodedSignature);

    var fatUrl = "http://platform.fatsecret.com/rest/server.api?" +
				"oauth_consumer_key=f1b3a606a7f04808a468ebcd2ab47b68" +
				"&oauth_signature_method=HMAC-SHA1" +
				"&oauth_timestamp=" + myTime +
				"&oauth_nonce=1234" +
				"&oauth_version=1.0" +
				"&oauth_signature=" + encodedSignature +
				"&method=profile.create";

	console.log("url")
	console.log(fatUrl);			
console.log("Fat Search GET START.....");

    // $.ajax({
    //   method: "GET",
    //   url: "/auth",
    //   data: newMessage
    // })
    // .done(function(res) {
    //   console.log("Fat Search GET DONE !!!!!!!!!!");
    //   console.log(res);
    //  res.send("done");
    // });

    var options = { 
    	host : "http://platform.fatsecret.com",
    	path : "/rest/server.api?" +
				"oauth_consumer_key=f1b3a606a7f04808a468ebcd2ab47b68" +
				"&oauth_signature_method=HMAC-SHA1" +
				"&oauth_timestamp=" + myTime +
				"&oauth_nonce=1234" +
				"&oauth_version=1.0" +
				"&oauth_signature=" + encodedSignature +
				"&method=profile.create"
    };

    console.log("options", options);

  //   http.get(options, function(gRes){

  //   	console.log("Fat Search GET DONE !!!!!!!!!!");
  //   	console.log ("Fat Get Response");
		// console.log (gRes);

  //   	res.json(gRes)


  //   });
  var request = require('request');
request(fatUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	console.log("Fat Search GET DONE !!!!!!!!!!");
    console.log(body) // Print the google web page.
  }
})


    
    
    
  });

};
