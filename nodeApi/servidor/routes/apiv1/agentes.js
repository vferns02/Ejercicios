'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require ('mongoose');
var Agente = mongoose.model('Agente');


router.get ('/', function (req, res){
	Agente.lista({name:'Jones'}, function (err, lista){
		if(err){
			console.log(err);
			return res.json({ok:false,error:err});
		}
		res.json({ok:true,data: lista});
	});
});



router.get ('/:id', function (req, res){
	var id = req.params.id;

	var agente = new Agente({name:'Instancia',age:33});
	agente.get(id, function (err, data){
		if (err){
			console.log(err);
		}
		res.json({ok: true,data:data});
			
	});
});

// crea un agente
//POST /apiv1/agentes

router.post ('/', function(req, res, next) {

	var nuevo = req.body;

	//creo un registro  de Agente 

	var agente = new Agente (nuevo); //{name:'Nuevo', age:18}


	agente.save(function (err, creado){
		if(err){
			console.log(err);
			return res.json({ok:false,error:err});
		}
		//devolver una confirmación
		res.json({ok:true, agente: creado})

	});
});

module.exports = router;