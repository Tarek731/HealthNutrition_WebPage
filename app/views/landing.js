// Include React
var React = require("react");
var ReactDOM = require("react-dom");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

const Landing = React.createClass({
  render: function () {
    return (
      <div className="container" >
        <h1> Landing Page Placeholder</h1>
      </div>
    );
  }
});






// Export the component back for use in other files
ReactDOM.render(<Landing />, document.getElementById('app'));

module.exports = Landing;
