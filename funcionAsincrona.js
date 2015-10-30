/*Hacer una función que reciba un texto y tras 2 segundos lo escriba en la consola.
La llamaremos escribeTras2Segundos. Llamarla 2 veces(texto1,texto2).Deben salir los textos 
con sus pausas correspondientes.
Alfinal escribir en la consola "Fin"*/

'use strict';

console.log('empiezo');
var escribeTras2Segundos = function(texto, callBack){
	setTimeout( function(){
		console.log(texto);
		callBack();
	},2000);
}
	escribeTras2Segundos('texto1',function(){
		console.log('texto 1 escrito');

	escribeTras2Segundos('texto2',function(){
		console.log('texto 2 escrito');
	
	console.log('Fin');	
	
	});
	});

