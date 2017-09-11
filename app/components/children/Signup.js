
var React = require("react");
var Link = require("react-router").Link;


var Signup = React.createClass({
  render: function() {
    return (	
		<div className="display">
			<section id="login">
			    <div className="container">
			        <div className="row">
			            <div className="col-xs-12">
			                <div className="form-wrap">
			                <h1>Create An Account</h1>
			                    <form role="form" action="/register" method="post" id="login-form" autocomplete="off">
			                        <div className="form-group">
			                            <label for="email" className="sr-only">Email</label>
			                            <input type="email" name="email" id="email" className="form-control" placeholder="Your email address"/>
			                        </div>
			                        <div className="form-group">
			                            <label for="username" className="sr-only">Username</label>
			                            <input type="text" name="username" id="username" className="form-control" placeholder="Pick a username"/>
			                        </div>
			                        <div className="form-group">
			                            <label for="password" className="sr-only">Password</label>
			                            <input type="password" name="password" id="password" className="form-control" placeholder="Create a password"/>
			                        </div>
			                        <div className="checkbox">
			                            <span className="character-checkbox" onclick="showPassword()"></span>
			                            <span className="label">Show password</span>
			                        </div>
			                        	<input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Sign Up"/>
			                    </form>
			                    		<Link to="/login" className="forget" data-toggle="modal" data-target=".forget-modal">Already Have an Account? Go to Log-In</Link>
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
