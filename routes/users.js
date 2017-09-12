var express = require('express');
var router = express.Router();
var User = require('../models/User');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var oauthSignature = require("oauth-signature");
var unixTimestamp = require("unix-timestamp");
var request = require('request');

//Register user
router.post('/sign-up', function(req, res){
  console.log("---------------------");
  console.log("routes user.js /sign-up post started");
  console.log(req.body);
	// var firstname = req.body.firstname;
	var email = req.body.email;
	// var lastname = req.body.lastname;
	var password = req.body.password;
	var username = req.body.username;

	// Valdiation
	// req.checkBody('firstname', 'Name is required').notEmpty();
	// req.checkBody('lastname', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid format').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		console.log('Failed to validate');
	}
	else{
    console.log("validated fields...")

/**************************
***************************
***************************/
  
  console.log("Fat Secret Profile.create code start....");

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
      user_id: username
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
    console.log("Fat Search GET profile.create END.....");


  request(fullUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("Fat Search GET profile.create DONE !!!!!!!!!!");
      console.log(body);  
      var fatBody = JSON.parse(body);

      /***************************
      ***************************/
          var newUser = new User({
            // firstname: firstname,
            // lastname: lastname,
            email: email,
            username: username,
            password: password,
            oauthToken: fatBody.profile.auth_token,
            oauthSecret: fatBody.profile.auth_secret
          });
          console.log("User.createUser starting...")
          User.createUser(newUser, function(err, user){
            console.log("User.createUser complete,  callback function started...");
            if(err) throw err;
            console.log(" user route " + user);
            console.log("User.createUser complete,  callback function finished...");
            
            //Set success message
          req.flash('success_msg', 'You are registered and can now login');
          res.send(user);
          });
      /***************************
      ***************************/
    }
    else {
      console.log("Profile.create Request Error");
      console.log("error");
      console.log(error);
      console.log("reponse");
      console.log(response);
    }
  })




/**************************
***************************
***************************/


		
	}


});

// Get username if it matches and validate password

passport.use(new LocalStrategy(

  function(username, password, done) {
  	console.log("authentication gets called");
  	User.getUserByUsername(username, function(err, user){
  		if(err) throw err;
  		if(!user){
  			return done(null, false, {message: 'Unknown User'});
  		}

  		User.comparePassword(password, user.password, function(err, isMatch){
  			if(err) throw err;
  			if(isMatch){
  				return done(null, user);
  			} else {
  				return done(null, false, {message: 'Invalid password'});
  			}
  		});
  	});
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {

/************************/
/************************/
/************************/

  console.log("/login passport authenticate:");
    // console.log ("req", req);
    // console.log("res", res);
  console.log("res.req.user.oauthToken", res.req.user.oauthToken);

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
        oath_token: res.req.user.oauthToken,
        user_id: res.req.user.username,
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
      if (!error2 && response2.statusCode == 200) {
        console.log("Fat Search GET profile.request_script_session_key DONE !!!!!!!!!!");
        console.log(body2) 
        var myBody2 = JSON.parse(body2);

          /************************/
          res.json({authenticated: true, sessionKey: myBody2.profile.session_key});
          /************************/

          // res.json({
          //   token : myBody.profile.auth_token,
          //   secret : myBody.profile.auth_secret,
          //   session_key : myBody2.profile.session_key
          // });
        }
      })


/************************/
/************************/
/************************/


});

router.get("/profile/:user", function(req, res){

  var user = req.params.user;

  User.find({username: user}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      console.log(doc);
      res.send(doc);
      //return doc;
    }
  });

});


module.exports = router;