// Include React
var React = require("react");
var ReactDOM = require("react-dom");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

const Landing = React.createClass({
  render: function () {
    return (
      <div>
        <nav className='navbar navbar-inverse'/>
          <div className="container-fluid" >
            <a className='navbar-brand' href='#'>Title</a>
            <ul className='nav navbar-nav' />
            <li className='active'>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </div>
      </div>
    );
  }
});






// Export the component back for use in other files
ReactDOM.render(<Landing />, document.getElementById('app'));

module.exports = Landing;
