// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Dashboard = React.createClass({
  render: function() {
    return (
		<div className="container">
			<h1>Dashboard Page</h1>
   			<h1> </h1>
   			<div id="my_container" className="fatsecret_container"></div>
      </div>   
    );
  }
});

// Export the component back for use in other files
module.exports = Dashboard;
