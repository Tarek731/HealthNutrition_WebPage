// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Signup = React.createClass({
  render: function() {
    return (
      <div>
      <button type="button" class="btn btn-primary">Signup</button>
	  </div>    
    );
  }
});

// Export the component back for use in other files
module.exports = Signup;
