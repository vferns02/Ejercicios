'use strict'

var express = require('express');
var router = express.Router();

//cargo la utilidad y la uso como un modelo 

var leeDependencies = require  ('../lib/leeDependencies');

router.get('/', function (req,res,next){

	//le pido al modelo los datos

	leeDependencies(function (err, data){
		if(err){
			console.log(err);
			next(err);  //El next lo utilizams para no contestar al error
			return;		//sin pones el return, te saltara un error de que estas respondiendo 
						//dos veces a la misma peticion
		}

	//paso los datos que me da el modelo a la vista dependencies
		res.render('dependencies',{data: data});

	});
});
module.exports = router;