// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Landing = React.createClass({
  render: function() {
    return (
		<div>
		<h1>Landing Page</h1>
   			<h2>FatSecret!!!</h2>
        <script src="http://platform.fatsecret.com/js?key=f1b3a606a7f04808a468ebcd2ab47b68&auto_load=true"></script>
 		</div>   
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;
