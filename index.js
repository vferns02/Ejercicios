'use strict';  //mejor usarlo siempre 
var http = require ('http');
var server = http.createServer( function (request, response){
	response.writeHead(200,{'content-type':'text/plain'}) //objeto literal'content-type':'text/plain':lo que vamos a devolver es texto plano
	response.end('Wake up,Neo...\n');
															//status de http 200
});
	server.listen(8080,'127.0.0.1');
	console.log('Servidor arrancado en http://127.0.0.1:8080');
