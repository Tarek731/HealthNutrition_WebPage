// Include React
var React = require('react');

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Landing = React.createClass({
  render: function () {
    return (
      <div class='jumbotron'>
        <div class='container'>
          <h1>Hello, world!</h1>
          <p>Contents ...</p>
          <p>
            <a class='btn btn-primary btn-lg'>Learn more</a>
          </p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;
