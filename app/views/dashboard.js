import React from "react";
import Background from "../../public/images/fruit-slices.jpg";

const Dashboard = React.createClass({
	render: function() {
		return (
			<div className="container">
				var sectionStyle = {
				  width: "100%",
				  height: "400px",
				  backgroundImage: "url(${Background})"
				};
			</div>
			)
	}
});

//Export the component back into the other files
module.exports = Dashboard;