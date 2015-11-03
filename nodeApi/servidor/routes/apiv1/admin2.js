'use strict';

var express = require('express');
var router = express.Router();
var jwt = require ('jsonwebtoken');

//middleware que comprueba cada peticion y verifica que el token que nos da es valido
router.get('',function (req,res,next) {
	var token = req.body.token ||
				req.query.token ||
				req.headers['x-access-token'];
	if(token){
		jwt.verify(token,'clavedeservidorsupersecreta', function (err,decodificado) {
			if(err){
				return  res.status(401).json({ok:false,error:'token no valido'});
			}
				req.decodificado = decodificado;
			//el usuario esta autenticado y puede seguir la peticion por otros middlewares
			next();
		});

	}else {
		return  res.status(401).json({ok:false,error:'token requerido'});
	}
});

router.post('/authenticate',function (req,res){
	var user = req.body.user;
	var pass = req.body.pass;

	//buscar el usuario en la base de datos
//...simulado
	var found={_id:'123',name:'Smith',password:'123123'};

	//si no lo encntramos

//return res.status(401).json({ok:false,error:'usuario no encontrado'});

	//encontrado
	if(found.password != pass){
		return res.status(401).json({ok:false,error:'contraseña no correcta'});
	}

//creamos un token
	var token = jwt.sign(found,'clavedeservidorsupersecreta',{
expiresInMinutes: 60*24
	});

//se lo devolvemos al usuario
	res.json({ok:true, token:token});
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('decodificado',req.decodificado)
  res.send('Zona de Administración');

});

module.exports = router;