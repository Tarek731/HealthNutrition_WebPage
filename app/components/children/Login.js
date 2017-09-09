// Include React
var React = require('react');

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Login = React.createClass({
  render: function () {
    return (
      <div className='display'>
        <section id='login'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <div className='form-wrap'>
                  <h1> Log-In</h1>
                  <form role='form' action='/login' method='post' id='login-form' autocomplete='off'>
                    <div className='form-group'>
                      <label for='username' className='sr-only'>Username</label>
                      <input type='text' name='username' id='username' className='form-control' placeholder='Username' />
                    </div>
                    <div className='form-group'>
                      <label for='password' className='sr-only'>Password</label>
                      <input type='password' name='password' id='password' className='form-control' placeholder='Password' />
                    </div>
                    <div className='checkbox'>
                      <span className='character-checkbox' onclick='showPassword()' />
                      <span className='label'>Show password</span>
                    </div>
                    <input type='submit' id='btn-login' className='btn btn-custom btn-lg btn-block' value='Log in' />
                  </form>
                  <a href='js/style.js' className='forget' data-toggle='modal' data-target='.forget-modal'>Forgot your password?</a>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='modal fade forget-modal' tabindex='-1' role='dialog' aria-labelledby='myForgetModalLabel' aria-hidden='true'>
          <div className='modal-dialog modal-sm'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>
                  <span aria-hidden='true'>×</span>
                  <span className='sr-only'>Close</span>
                </button>
                <h4 className='modal-title'>Recovery password</h4>
              </div>
              <div className='modal-body'>
                <p>Type your email account</p>
                <input type='email' name='recovery-email' id='recovery-email' className='form-control' autocomplete='off' />
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Cancel</button>
                <button type='button' className='btn btn-custom'>Recovery</button>
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
