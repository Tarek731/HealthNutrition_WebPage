
var React = require('react');
var Link = require('react-router').Link;

var Signup = React.createClass({
  render: function () {
    return (
      <div className='display'>
        <div className='col-xs-12 col-'>
          <div className='form-wrap'>
            <h1>Create An Account</h1>
            <form >
              <div className='form-group'>
                <label htmlFor='email' className='sr-only'>Email</label>
                <input type='email' name='email' id='email' className='form-control' placeholder='Your email address' />
              </div>
            </form>
            <Link to='/login' className='forget'>Already Have an Account? Go to Log-In</Link>
            <hr />
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Signup;
