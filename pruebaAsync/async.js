'use strict';
var async = require ('async');

//defino un array

var arr = ['uno','dos','tres'];

//defino un iterador
var iterador = function (elemento, callback){
	
	if(elemento==='dos') {
		callback(null); // cuando llamo al callback primero el error y luego el resultado
	} else{
		elemento = elemento + '-procesado';
		callback(null,elemento)
	} //podria poner un return antes del callback(null) u otro al final del else y qitandolo y
	 	// asi me aseguro qe el codigo no va a seguir hacia abajo porq la funcion termina ahi
};


//procesar el array

async.concat(arr,iterador,function(err, resultados){
//mostrar resultados
	if (err) 
	return callback(err);
	console.log(resultados)
});
