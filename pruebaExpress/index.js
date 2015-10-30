
'use strict';
var express = require ('express');

//con esta libreria vams hacer 
//crear una app de express

var app = express();

//le vams a decir que escuche peticiones en raiz

app.get('/',function (req, res){  //get= para pedir datos
	console.log('peticion');		//post=para crear un recurso
									//put=para actualizar 
									//delete = eliminar un recurso
//vamos a responder las peticiones	

	res.send('Hello world');
});

var server = app.listen(8080,function(){
	var port = server.address().port;      //para saber en que puerto ha arrancado
	console.log('servidor express arrancado en el puerto ' + port);
});