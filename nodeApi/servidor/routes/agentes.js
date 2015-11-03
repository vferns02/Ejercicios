'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require ('mongoose');
var Agente = mongoose.model('Agente')

//var Agente = require ('../models/Agente') // Alternativa 

/* GET users listing. */

router.get('/', function(req, res, next) {

	//creo un registro  de Agente en el metod get(que no es acobsejable).
	var agente = new Agente ({name:'Nuevo', age:18});
	agente.save(function (err, creado){
		if(err){
			console.log(err);
			return next(err);
		}
		console.log(creado);

	});

  res.send('respond with a resource');
});

module.exports = router;