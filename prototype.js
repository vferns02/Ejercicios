//Prototipo

'use strict';
//haremos un constructor de objetos

var Persona = function ( name ){
	this.name = name;
}
//Creamos un objetos

var persona = new Persona ('Paco');
//le asignamos un metodo a el objeto
persona.saluda = function(){
	console.log('Hola soy ' + this.name);
};
persona.saluda();

//creamos otro objeto.
var luis = new Persona ( 'Luis');  
//veremos que no tiene el metodo // Si lo dejaramos asi luis no tiene el metodo saluda 

//luis.saluda(); lo dejo comentado para que no de error

//ponerle un metodo al prototipo 

Persona.prototype.come = function () {  //AL prototype de persona se le pone un metodo
	console.log( 'ñam ñam')
};
persona.come();
luis.come();  // ahora ya funcionara porque el prototipo tene el metodo