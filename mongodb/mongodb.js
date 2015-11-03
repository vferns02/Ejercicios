'use strict';

var mongoskin = require ('mongoskin');
var db = mongoskin.db('mongodb://localhost:27017/prueba');

db.collection ('agentes').find().toArray(function (err,result){
	if(err){
		throw err;
	}
	console.log(result);
});