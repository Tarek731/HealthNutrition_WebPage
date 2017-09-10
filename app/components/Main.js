// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            </div>
              <div className="collapse navbar-collapse" id="myNavbar"> 
                    <ul className="nav navbar-nav navbar-left">
                     <li><Link to="/landing"><span className="glyphicon glyphicon-cloud"></span> Home</Link></li>



                    <li><Link to="/dashboard"><span className="glyphicon glyphicon-dashboard"></span> Dashboard</Link></li>


                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://github.com/Tarek731/Project_2"> About Us</a></li>
                        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
              </div>
          </div>      
        </nav>      
          
            <div className="row">
              {this.props.children}
            </div>
      </div>   
      
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
