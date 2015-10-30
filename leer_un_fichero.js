
var fs = require ('fs');
var path = require ('path');
//abrir un fichero y convertir su contenido(JSON) en objeto
//Por útimo usamos dicho objeto.
var fichero = path.join('./','prueba.js');

console.log ('Abrir ' + fichero);

fs.readFile(fichero,'utf8',function (err,data){
	if(err){
		console.log(err);
		return;
	};
	
	var objeto = JSON.parse(data);
	console.log(objeto.nombre);

});