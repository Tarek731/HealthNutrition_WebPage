// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
      <div>
        <nav class="navbar navbar-default navbar-inverse navbar-toggleable-lg">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!-- navbar collapses to button on small screen -->
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <a class="navbar-brand" href="/"></a>
                        <li><a href="#">About</a></li>
                        <li class="active"><a href="/">Home</a></li>
                    </ul>
                    <!-- log in glyphicon and link in navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="https://github.com/Tarek731/Project_2">About Us</a></li>
                        <li><a href="/sign-up"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>       
        </nav>
            <div className="container">
              <div className="jumbotron">
                <h2><strong>Which Child???</strong></h2>
                <p><em>A journey through the whimsical world of React Routing</em></p>
                <hr/>
              <div>
                <Link to="/Signup"><button className="btn btn-primary btn-lg">Signup</button></Link>
                <Link to="/login"><button type="button" class="btn btn-primary">Login</button></Link>
              </div>  
          
       
        
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
