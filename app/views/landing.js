// Include React
var React = require("react");
var ReactDOM = require("react-dom");

// var Background = require("../../public/images/fruit-slices.jpg");
// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

const Landing = React.createClass({
  render: function () {
    return (
<<<<<<< HEAD
    	<div className="container">

    		<br/><br/>
    		<h1> Health Nutrition Web Page! </h1>
    		<br/>
    		<h3> HealthyApp is an application that will refine your favorite foods and check if it is acceptable to eat depending on the diet you choose. </h3>

    	</div>
=======
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
>>>>>>> 9370a6b9999c9e9397a8eff1eaaf5fc8e893873f
    );
  }
});






// Export the component back for use in other files
ReactDOM.render(<Landing />, document.getElementById('app'));

module.exports = Landing;
