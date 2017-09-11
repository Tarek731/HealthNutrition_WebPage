import {hashHistory} from 'react-router';
// Include React

var React = require("react");
var Login = require("./Login")




// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
// Requiring our helper for making API calls
var helpers = require("../../utils/helpers");

var Login = React.createClass({

 //Init component
  getInitialState: function() {
    return { 
      username: "" ,
      password: "",
       redirect: false

    };
  }, 

  handleChange(event) {
   
    if(event.target.id === 'username'){
       this.setState({username: event.target.value});
    }

    if(event.target.id === 'password'){
       this.setState({password: event.target.value});
    }
  },

  handleLogin(event) {
    console.log("logging in")
    var username = this.state.username
    console.log(username + ' is the username inside login')
    console.log('the total data is :' + this.state.firstname, this.state.lastname, this.state.email, this.state.password);
    helpers.loginUser({ 
      username: username,
      password: this.state.password 
    }).then(function(response, username){

      var user = JSON.parse(response.config.data).username
        console.log("RESULTS", response.data.authenticated);
        var isAuthenticated = response.data.authenticated;
console.log('*'+user+'*')
        if(isAuthenticated){
          document.cookie = "user="+user;
          var x = document.cookie
          console.log("cookie " + x)
          hashHistory.push('/profile/'+ user)
          // window.location.href = "/#/profile";
          window.location.href = "/dashboard";
        } else {
          // show error and stay on apge
          alert("failed to authenticate");
        }
    }).catch(function(err) {
     gitconsole.log("inside handleLogin Catch()", JSON.stringify(err, null, 2));

      if(err.response.status == 401) {
        alert("That Username and Password is not valid. Please sign-up on the Sign Up link");
      }

    })
    event.preventDefault();
  },

// Here we render the component
  render: function() {
   const { redirect } = this.state;

    if (redirect) {
       return <Redirect to='/profile'/>;
    }

    return (
        <div className="display">
			<section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-wrap">
                                <h1> Log-In</h1>
                                <form onSubmit = {this.handleLogin} className="loginForm">
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input 
                                        type="text" value={this.state.username} onChange={this.handleChange} className="form-control" id="username" required/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="userPassword">Password</label>
                                        <input type="password"  value={this.state.password} onChange={this.handleChange} className="form-control" id="password" required/>
                                    </div>
                                    
                                    <div className="checkbox">
                                        <span className="character-checkbox" onclick="showPassword()"></span>
                                        <span className="label">Show password</span>
                                    </div>
                                    <div className="form-group">
                                    <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Login"/>
                                    </div>
                                </form>
                                
                                <a href="/Register" className="link" data-toggle="modal" data-target=".forget-modal">Forgot your password?</a>
                                <hr/>
                            </div>
                        </div> 


              </div>
            </div>
      
        </section>

        
          </div>
        

    );
  }
});

// Export the component back for use in other files
module.exports = Login;
