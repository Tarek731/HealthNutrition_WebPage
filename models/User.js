var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mongoose = require('mongoose');
 

// make decision passport or storm path on diy
var UserSchema = new Schema({
  	username: String,
    password: String,
    email: String,
    gender: String,
    address: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
