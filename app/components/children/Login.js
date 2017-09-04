// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Login = React.createClass({
  render: function() {
    return (
      <div class="display">
			<section id="login">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-wrap">
                                <h1> LOG-IN</h1>
                                <form role="form" action="/login" method="post" id="login-form" autocomplete="off">
                                    <div class="form-group">
                                        <label for="username" class="sr-only">Username</label>
                                        <input type="text" name="username" id="username" class="form-control" placeholder="Username"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" name="password" id="password" class="form-control" placeholder="Password"/>
                                    </div>
                                    <div class="checkbox">
                                        <span class="character-checkbox" onclick="showPassword()"></span>
                                        <span class="label">Show password</span>
                                    </div>
                                    <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Log in"/>
                                </form>
                                <a href="js/style.js" class="forget" data-toggle="modal" data-target=".forget-modal">Forgot your password?</a>
                                <hr/>
                            </div>
                        </div> 
                    </div>
                </div>
             </section>
       
	            <div class="modal fade forget-modal" tabindex="-1" role="dialog" aria-labelledby="myForgetModalLabel" aria-hidden="true">
	                <div class="modal-dialog modal-sm">
	                    <div class="modal-content">
	                        <div class="modal-header">
	                            <button type="button" class="close" data-dismiss="modal">
	                                <span aria-hidden="true">×</span>
	                                <span class="sr-only">Close</span>
	                            </button>
	                            <h4 class="modal-title">Recovery password</h4>
	                        </div>
	                        <div class="modal-body">
	                            <p>Type your email account</p>
	                            <input type="email" name="recovery-email" id="recovery-email" class="form-control" autocomplete="off"/>
	                        </div>
	                        <div class="modal-footer">
	                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
	                            <button type="button" class="btn btn-custom">Recovery</button>
	                        </div>
	                    </div>
	            	</div>
	    		</div>
    	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
