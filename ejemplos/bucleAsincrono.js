/* Crear un bucle (funcion recursiva) q imprima un texto 5 veces esperando 1 segndo entre impresiones
*/

'use strict';

console.log('empiezo');
var escribeTras2Segundos = function(texto, callBack){
	setTimeout( function(){
		console.log(texto);
		callBack();
	},1000);
}


function serie (n,func, callBackFin) {  //llamada recursiva limitandola mediante un If
	if (n>0) {
		n--;
	func('texto',function(){
		serie(n,func,callBackFin);
	});
	} else {
		callBackFin();
	}
}

serie(5,escribeTras2Segundos, function(){
	console.log('Fin');
});

	

