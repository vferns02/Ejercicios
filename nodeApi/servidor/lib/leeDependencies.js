'use strict'

//abrir fichero package.json
var fs = require('fs');

function leeDependencies(cb) {

fs.readFile('./package.json', function (err,data){
	if (err) {
		return cb(err);
	}
	try{
		
		//parsearlo
		var packageJson = JSON.parse(data);

	}catch (e){

		return cb(e);  //No utilizo finally x los return
	
	}

	//devolver las dependencias

	return cb(null,Object.getOwnPropertyNames(packageJson.dependencies));  //este metodo ns saca las propiedades de un objeto

}); 
}
module.exports = leeDependencies;