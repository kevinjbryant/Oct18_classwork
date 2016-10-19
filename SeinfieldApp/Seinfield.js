//initialize dependencies
var bodyParse = require ('bodyParse');
var mysql = require ('mysql');
var express = require ('express');
var app = express();


//create port num
var port = 3421;
app.listen(port);

//make sql connection 
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: '3006',
	password: '',
	database: 'Seinfield_DB'
});


// Connecting the mysql database mentioned above
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);

//4 connection queries to insert data into database 
connection.query("INSERT INTO Actors (actorName, coolness_points, attitude) VALUES ('jerry','6','sad');" function(err, res){
	if (err){
		throw err;
	}
});
connection.query("INSERT INTO Actors (actorName, coolness_points, attitude) VALUES ('julia','4','happy');" function(err, res){
	if (err){
		throw err;
	}
});
connection.query("INSERT INTO Actors (actorName, coolness_points, attitude) VALUES ('len','9','pissed');" function(err, res){
	if (err){
		throw err;
	}
});
connection.query("INSERT INTO Actors (actorName, coolness_points, attitude) VALUES ('peggy','1','jolly');" function(err, res){
	if (err){
		throw err;
	}
});

//make the app get something
app.get ()