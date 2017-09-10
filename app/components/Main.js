// Include React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const Main = React.createClass({

// Here we render the function
  render: function () {
    return (

      <div >
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <ul className='list-inline'>
              <li><a className='btn btn-default action-button' role='button' href='login'>Log In</a></li>
              <li><a className='btn btn-default action-button' role='button' href='signup'>Sign Up</a></li>
            </ul>
          </div>
        </nav>

        <div className='row'>
          {this.props.children}
        </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
