'use strict';    
var one = {
	id: 123,
	count: 41,
	desc:'esto es la descripción'
};

var two ={
	name: 'El nombre',
	tag: 'js',
	values:[1,2,3]
};

var three ={
	count:42,
	title:'titulo',
	desc: null,
	values:[5,6,7]
}

var util = require ('util');


var extendido = util._extend(one,two); // copia las caracteristicas de two sobre one y las devuelve
console.log(util._extend(extendido,three));	 //aqui realzia lo mismo pero vuelca las de three sobre el extendido

// con esto conseguimos una combiancion de los 3 objetos
//pero las caracteristicas se pisan.