'use strict';

var mysql = require ('mysql');
//crear una conexion
var connection = mysql.createConnection ({
	host:'didimo.es',
	user: 'usuariocurso',
	password: 'us3r',
	database: 'cursonode'
});

//conectar
connection.connect();

//leer filas - query
connection.query('SELECT * FROM agentes', function (err, rows, fileds){
	if (err) {
		throw err;
	}

	rows.forEach(function (row){
		console.log(row);
	});
});