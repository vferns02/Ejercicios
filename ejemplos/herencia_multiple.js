'use strict';

//Primero creamos un constructor de personas

var Persona = function ( nombre, apel){
	this.nombre = nombre;
	this.apellido = apel;
};
//CReamos la persona trinity
var trinity = new Persona ('Trinity ', '');

var matrixMixin={   //(mixin;Es un objeto con uns metodos
	vuela: function(){
		console.log(this.nombre + this.apellido + 'vuela');
	},
	esquivaBalas: function(){
		console.log ( this.nombre + this.apellido + 'esquiva Balas');
	}
}; //ahora aplicaremos el mixin a trinity

var util = require ('util');

Persona.prototype = util._extend(Persona.prototype,matrixMixin);

var neo = new Persona('Thomas ', 'Anderson '); //cualquier objeto Persona que creemos
												// ahora heredara los metodos de prototipo.
neo.vuela();
trinity.vuela();

neo.esquivaBalas();
trinity.esquivaBalas();