//install requirements
var express = require ('express');
var url = require ('url');

//create the port and server
var PORT = 4356;
var createServer = http.createServer(handleRequest);

//make server listen
server.listen(PORT, function(){
	console.log('listening on port: ' PORT);
})


//handler request function 
function handleRequest(req, res){
	var urlParts = url.parts(req.url);

	console.log(urlParts);
}