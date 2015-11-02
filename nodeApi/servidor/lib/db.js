var mysql = require ('mysql');


var connection = mysql.createConnection ({
	host:'didimo.es',
	user: 'usuariocurso',
	password: 'us3r',
	database: 'cursonode'
});
connection.connect (function (err, data){
	if(err) {
		console.log(err);
		process.exit(1);
		return;
	}

	console.log('Conectado a mysql');

});
module.exports = connection;