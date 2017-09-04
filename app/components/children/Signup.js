// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Signup = React.createClass({
  render: function() {
    return (
		<div class="display">
			<section id="login">
			    <div class="container">
			        <div class="row">
			            <div class="col-xs-12">
			                <div class="form-wrap">
			                <h1>Create an account by filling out the information below</h1>
			                    <form role="form" action="/sign-up" method="post" id="login-form" autocomplete="off">
			                        <div class="form-group">
			                            <label for="email" class="sr-only">Email</label>
			                            <input type="email" name="email" id="email" class="form-control" placeholder="Your email address"/>
			                        </div>
			                        <div class="form-group">
			                            <label for="username" class="sr-only">Username</label>
			                            <input type="text" name="username" id="username" class="form-control" placeholder="Pick a username"/>
			                        </div>
			                        <div class="form-group">
			                            <label for="password" class="sr-only">Password</label>
			                            <input type="password" name="password" id="password" class="form-control" placeholder="Create a password"/>
			                        </div>
			                        <div class="checkbox">
			                            <span class="character-checkbox" onclick="showPassword()"></span>
			                            <span class="label">Show password</span>
			                        </div>
			                        	<input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Sign Up"/>
			                    </form>
			                    		<a href="/login" class="forget" data-toggle="modal" data-target=".forget-modal">Already Have an Account? Go to Log-In</a>
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
