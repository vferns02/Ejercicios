'use strict';
var mongoose = require ('mongoose');

var db = mongoose.connection;

//handler de error de conexion
db.on ('error', function (err){
	console.log(err);
	process.exit(1);
});

//handler de conexion
db.once ('open', function (){
	console.log('conectados a mongodb');
});

//conectamos

mongoose.connect('mongodb://localhost/prueba');
