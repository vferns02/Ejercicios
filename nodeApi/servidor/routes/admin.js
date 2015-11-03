'use strict';

var express = require('express');
var router = express.Router();
var basicAuth = require ('basic-auth');

//basic authentication

router.use(function (req,res,next){

	//cargar el usuario de la cabecera
var user = basicAuth(req);

	//comprobar si existe el usuario
	if(!user || user.name !== 'admin' || user.pass!== 'admin') {
    //si no existe, devolver error

    //Ponemos cabecera de basic auth
    res.set('www-Authenticate','Basic realm = Authorization Required')

    res.send(401);
    return;

	}
	next();

	//si existe next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Zona de Administración');

});

module.exports = router;