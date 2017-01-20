// Include React
var React = require("react");

// Here we include all of the sub-components
//var Child = require("./Child");
//import bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import reactBootstrap from "react-bootstrap/dist/react-bootstrap.js";
//import Button from 'react-bootstrap/lib/Button';

var bootstrap =require("bootstrap/dist/css/bootstrap.css");
var reactBootstrap = require("react-bootstrap/dist/react-bootstrap.js");
var Button = require("react-bootstrap/lib/Button"); 
// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	render: function() {
		 var ButtonGroup = reactBootstrap.ButtonGroup,
            Button  = reactBootstrap.Button;
		return (
			<div className="container">

				

				<ButtonGroup>
					
						<Button bsStyle="success" className="mainContent">Featured Work</Button>
					</ButtonGroup>
				
			</div>
		)
	}
})

module.exports = Main;
