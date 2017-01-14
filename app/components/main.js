// Include React
var React = require("react");

// Here we include all of the sub-components
//var Child = require("./Child");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>hello</h1>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Main;
