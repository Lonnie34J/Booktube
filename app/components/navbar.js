var bootstrap =require("bootstrap/dist/css/bootstrap.css");
var React = require("react");
var reactBootstrap = require("react-bootstrap/dist/react-bootstrap.js");

var MenuItem=require("react-bootstrap/lib/MenuItem");

var Nav=require("react-bootstrap/lib/Nav");
var Navbar=require("react-bootstrap/lib/Navbar");
var NavbarBrand=require("react-bootstrap/lib/NavbarBrand");
var NavbarHeader=require("react-bootstrap/lib/NavbarHeader");
var NavDropdown=require("react-bootstrap/lib/NavDropdown");
var NavItem=require("react-bootstrap/lib/NavItem");





var navbar = React.createClass({

	render: function() {

		return (
			
			<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="http://icons.iconarchive.com/icons/arrioch/app/128/notepad-icon.png">Rip</a>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
			      <NavItem eventKey={1} href="#">About</NavItem>
			      <NavItem eventKey={2} href="#">Sign Up</NavItem>
			      <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1}>Sign In</MenuItem>
			        <MenuItem eventKey={3.2}>Upload</MenuItem>
			        <MenuItem eventKey={3.3}>Profile</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.3}>Sign Out</MenuItem>
			      </NavDropdown>
			    </Nav>
			</Navbar>
			

		);
	}
});

module.exports = navbar;