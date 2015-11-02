var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

//Recibir parámetros
router.get('/:id', function(req,res,next){
	console.log('params:', req.params);
	console.log('query:', req.query);

	var id = req.params.id;
	var edad= req.query.edad;

	res.send('respond with a resource');
});

//Petición post con body

router.post('/:id', function(req,res){
console.log('body: ' ,req.body);

req.send('body cogido');

});
module.exports = router;
