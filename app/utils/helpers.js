// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  registerUser: function(userData) {
    return axios.post("/users/sign-up", userData).then(function(results) {
       console.log("axios results for user sign up", results);
       return results;
     });
  },

  loginUser: function(userData){
  	return axios.post("/users/login", userData);
  },

  getUser: function(searchParams){
  	return axios.get("/users/profile/"+ searchParams.username);
  }

  


  


};