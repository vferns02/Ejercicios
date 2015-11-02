'use strict';
var express = require('express');
var router = express.Router();

var db = require ('../lib/db');

router.get('/',function (req,res,next){
	db.query('SELECT * FROM agentes', function (err, rows){
		if (err){
			return next(err);
		}
		res.render('mysql',{title:'agentes mysql',rows:rows});
	});
});
module.exports = router;