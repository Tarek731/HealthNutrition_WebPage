// Include React
var React = require("react");

// var Background = require("../../public/images/fruit-slices.jpg");
// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Landing = React.createClass({
  render: function() {
    return (
    	<div className="container">

    		<br/><br/>
    		<h1> Health Nutrition Web Page! </h1>
    		<br/>
    		<h3> HealthyApp is an application that will refine your favorite foods and check if it is acceptable to eat depending on the diet you choose. </h3>

    	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;
