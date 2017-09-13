// Include React
var React = require("react");
var ReactDOM = require("react-dom");
var Link = require("react-router").Link;

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

var Landing = React.createClass({
  render: function () {
    return (
   
  <div>

   <nav className='navbar navbar-default'>
        <div className='container-fluid'>
            <div className='navbar-header' />
              <div className='collapse navbar-collapse' id='myNavbar'>
                <ul className='nav navbar-nav navbar-left'>
                 
                </ul>
                   <ul className="nav navbar-nav navbar-right"> 
                        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        
                   </ul>
              </div>
            </div>      
      
  </nav> 
  

<div className="splash-container">
    <div className="splash">
        <h1 className="splash-head">Your Nutrition</h1>
        <p className="splash-subhead">
            Get Fast, Reliable Health Nutrition Information on the Go 
        </p>
        <p>
            <Link to ="/Signup" className="pure-button pure-button-primary">Get Started</Link>
        </p>
    </div>
</div>
  
  

<div className="content-wrapper">
    <div className="content">
       <h2 className="content-head is-center">Look Up Nutritional Information for Millions of foods </h2>
        
    </div>

    <div className="ribbon l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-med-1-2 pure-u-lrg-2-5">
            <img className="pure-img-responsive" alt="File Icons" width="300" src="img/bg12.jpg"/>
       
        <div className="pure-u-1 pure-u-med-1-2 pure-u-lrg-3-5">

            <h2 className="content-head content-head-ribbon">Powered by Fat Secret</h2>

            <p>
                Get Fast, Reliable Health Nutrition Information on the Go Convenient and easy way to make the healthy choice everytime. Never the APP allows you to look up nutritional information for millions of foods at the click of a button powerd by an extensive food database
            </p>
        </div>
    </div>

    <div className="content">
        <h2 className="content-head is-center">Convenient and Easy Way to Make the Healthy Choice </h2>

        <div className="pure-g">
            

            <div className="l-box-lrg pure-u-1 pure-u-med-3-5">
                
            </div>
        </div>

    </div>

</div>
</div>
</div>

  

   
    );
  }
});






// Export the component back for use in other files


module.exports = Landing;
