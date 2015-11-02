var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ 
  	title: 'NodeApi',
  	lista: ['uno','dos','tres'],
  	par: (new Date()).getSeconds() % 2 === 0 ? 'par' : 'impar'
  });
});
router.get('/list', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
