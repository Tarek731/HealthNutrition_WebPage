
var React = require("react");

var helpers = require("../../utils/helpers");
var Link = require("react-router").Link;

var Signup = React.createClass({
 	//Init component
  getInitialState: function() {
    return { 
      username: "",
      email: "",
      password: "",
       redirect: false

    };
  }, 

  handleChange(event) {

  	console.log("Change in text");
   
    if(event.target.id === 'username'){
       this.setState({username: event.target.value});
    }

    if(event.target.id === 'password'){
       this.setState({password: event.target.value});
    }
  	 
  	 if(event.target.id === 'email'){
       this.setState({email: event.target.value});
    }

  },

  handleSignup(event) {
  	event.preventDefault();
    console.log("sign up button clicked")

    var pw = this.state.password
  //   var username = this.state.username
  //   console.log(username + ' is the username inside login')
  //   console.log('the total data is :' + this.state.firstname, this.state.lastname, this.state.email, this.state.password);
    helpers.registerUser({ 
      username: this.state.username,
      password: pw,
      email: this.state.email

    }).then(function(response){
      console.log("handleSignup - helper.registerUser.then() started")
    	console.log(" this is the response with the user!!!!!!!" , response.data.username, response.data.password);
      console.log("these are the passwords" , pw)
      var username = response.data.username;
      // var password = this.state.password;


      helpers.loginUser({ 
      username: username,
      password: pw
    }).then(function(response, username){

      var user = JSON.parse(response.config.data).username
        console.log("RESULTS", response.data.authenticated);
        var isAuthenticated = response.data.authenticated;
console.log('*'+user+'*')
        if(isAuthenticated){
          document.cookie = "user="+user;
          var x = document.cookie
          document.cookie = "fatsecret_session_key="+response.data.sessionKey + "; path=/";
          console.log("cookie " + x)
          // hashHistory.push('/profile/'+ user)
          // window.location.href = "/#/profile";
          window.location.href = "/dashboard";
        } else {
          // show error and stay on apge
          alert("failed to authenticate");
        }
    }).catch(function(err) {
     console.log("inside handleLogin Catch()", JSON.stringify(err, null, 2));
     console.log(err);

      if(err.response.status == 401) {
        alert("That Username and Password is not valid. Please sign-up on the Sign Up link");
      }

    })





  //     var user = JSON.parse(response.config.data).username
  //       console.log("RESULTS", response.data.authenticated);
  //       var isAuthenticated = response.data.authenticated;
		// console.log('*'+user+'*')
  //       if(isAuthenticated){
  //         document.cookie = "user="+user;
  //         var x = document.cookie
  //         console.log("cookie " + x)
  //         hashHistory.push('/profile/'+ user)
  //         // window.location.href = "/#/profile";
  //       } else {
  //         // show error and stay on apge
  //         alert("failed to authenticate");
  //       }
    })
    
  },



  render: function() {
    return (	
		<div className="display">
			
 <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header' />
                      <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-left'>
                          <li><Link to="/landing"><span className='glyphicon glyphicon-cloud'/>Home</Link></li>  
                        </ul>
                           <ul className="nav navbar-nav navbar-right"> 
                                <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>

                           </ul>
                      </div>
                    </div>      
              
          </nav> 










      <section id="login">
			    <div className="container">
			        <div className="row">
			            <div className="col-xs-12">
			                <div className="form-wrap">
			                <h1>Create An Account</h1>
			                    <form role="form" onSubmit = {this.handleSignup} id="login-form" autocomplete="off">
			                        <div className="form-group">
			                            <label for="email" className="sr-only">Email</label>
			                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email" className="form-control" placeholder="Your email address"/>
			                        </div>
			                        <div className="form-group">
			                            <label for="username" className="sr-only">Username</label>
			                            <input value={this.state.username} onChange={this.handleChange} type="text" name="username" id="username" className="form-control" placeholder="Pick a username"/>
			                        </div>
			                        <div className="form-group">
			                            <label for="password" className="sr-only">Password</label>
			                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" className="form-control" placeholder="Create a password"/>
			                        </div>
			                        <div className="checkbox">
			                            <span className="character-checkbox" onclick="showPassword()"></span>
			                            <span className="label">Show password</span>
			                        </div>
			                        	<input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block"/>
			                    </form>
			                    		{/* <Link to="/login" className="forget" data-toggle="modal" data-target=".forget-modal">Already Have an Account? Go to Log-In</Link>} */}
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
module.exports = Signup;
