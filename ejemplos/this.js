var coche = function (name) {
	this.name =name;
	this.saluda = function (){
		console.log('Hola soy ' + this.name);

	}
};
// creamos un objeto
var vehiculo = new coche ('tesla');
//llamos al método

vehiculo.saluda();

//otro llama la método y utilizamos bind 

setTimeout(vehiculo.saluda.bind(vehiculo),1000);