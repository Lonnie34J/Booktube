var bootstrap =require("bootstrap/dist/css/bootstrap.css");
var React = require("react");
var reactBootstrap = require("react-bootstrap/dist/react-bootstrap.js");

var Jumbotron=require("react-bootstrap/lib/Jumbotron");


var body = React.createClass({

	render: function() {

		return (

			<Jumbotron>
			    <h1>Featured Work</h1>
  			</Jumbotron>

		);
	}

});

module.exports = body;