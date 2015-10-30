//hacer una funcion que devuelva otra
//la segunda tendra acceso al scope de su madre

function creaClosure(name) {
	return function(){
		console.log(name);
	}
}
//creamos el closure
var closure = creaClosure('tesla');

//usamos el closure

closure(7);
