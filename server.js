// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var methodOverride = require('method-override');
var Sequelize = require('sequelize');
//require models files from models folder
var models = require('./models');
// Create Instance of Express
var app = express();


//variable for models and sequel connection
var sequelizeConnection = models.sequelize;

// sync the tables
sequelizeConnection.sync()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//Port variable and set up for listening  
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});