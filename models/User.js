//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
//Create Schema class
var Schema = mongoose.Schema;

//Create User schema
var UserSchema = new Schema ({
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false,
        unique: false,
        validate: [
          // Function takes in the value as an argument
        function(input) {
        // If this returns true, proceed. If not, return an error message
        return (input.length >= 6 && input.length <= 20);
         },
        "User id should contain at least 6 characters long and should not contain more than 10 characters."
    ]
      },
    date: {
        type: Date,
        default: Date.now()
    },
    picture : {
        type: String,
    },
    email: {
        type: String,
        lowercase: true, // always convert email to lower case
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: false
    },

    bio: {
        type: String
    },
    interests: {    
        type: Array
    },
    oauthToken: {
        type: String,
        required: false
    },
    oauthSecret: {
        type: String,
        required: false
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;

module.exports.createUser = function(newUser, callback){
    //Use bcrypt to hash password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback); //mongoose method
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}