// Include React
var React = require("react");
var Link = require("react-router").Link;
// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Dashboard = React.createClass({
	componentDidMount: function() {
	  
	    fatsecret.setContainer("my_container");
		fatsecret.setCanvas("home");
 	},
	render: function() {
		return (

		<div>

			<nav className='navbar navbar-default'>
		        <div className='container-fluid'>
		            <div className='navbar-header' />
		              <div className='collapse navbar-collapse' id='myNavbar'>
		                <ul className='nav navbar-nav navbar-left'>
		                  <li><Link to="/landing"><span className='glyphicon glyphicon-cloud'/>Home</Link></li>  
		                   <li><Link to="/dashboard"><span className="glyphicon glyphicon-dashboard"></span> Dashboard</Link></li>
		                </ul>
		                   <ul className="nav navbar-nav navbar-right"> 
		                        <li><Link to="/profile">My Profile</Link></li>

		                   </ul>
		              </div>
		            </div>      
		      
		    </nav> 
			<div className="container panel panel-default" id="dashpanel">
			<h1>Dashboard Page</h1>
				
			<div id="my_container" className="fatsecret_container"></div>

			</div>   
		 	</div>
		
		);
	}
});

// Export the component back for use in other files
module.exports = Dashboard; 