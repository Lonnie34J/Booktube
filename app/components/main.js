// Include React
var React = require("react");

// Here we include all of the sub-components
//var Child = require("./Child");


var bootstrap =require("bootstrap/dist/css/bootstrap.css");
var PageHeader = require("react-bootstrap/lib/PageHeader");
var reactBootstrap = require("react-bootstrap/dist/react-bootstrap.js");

var Navbar = require("./navbar");
var Body = require("./body");

// This is the main component. It includes the banner and button.

var Main = React.createClass({

	render: function() {
		 //var PageHeader= reactBootstrap.PageHeader;
         
		return (
			<div className="container">

				<div className = "row mainHead">
					<PageHeader>Torn Pages <small>Get noticed a chapter at a time</small></PageHeader>
				</div>

				<div>
					<Navbar />
				</div>

				<div>
					<Body />
				</div>

			</div>
		)
	}
})

module.exports = Main;
