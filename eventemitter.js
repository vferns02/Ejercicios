    

var events = require('events');

//definimos un emisor de eventos

var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('suene telefono', function (quien){
	if (quien==='madre') { //si se cumple la condicion salatara a la siguiente
		return;
	} 
	console.log('ring ring');
});
myEventEmitter.on('suene telefono', function (quien){
	console.log('brr brr');
});
myEventEmitter.emit('suene telefono','madre');