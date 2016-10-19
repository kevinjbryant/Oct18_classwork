var express = require ('express');
var app = express();

var port = 9874;
app.listen(port);

var exphb = require ('express-handlebars');
app.engine('handlebars', exphb({
	defaultlayout: 'main' 
}));


app.set ('view engine,' 'express-handlebars');

 var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

  app.get('/icecream/:name', function (req, res){
  		for ( var i = 0; i < icecreams.length; i++){

  		}
  });

  app.get('/icecreams', function (req, res){
  		res.render(icecreams);
  })