'use strict';
var express = require('express');
var router = express.Router();

var dbMysql = require ('../lib/dbMysql');

router.get('/',function (req,res,next){
	db.query('SELECT * FROM agentes', function (err, rows){
		if (err){
			return next(err);
		}
		res.render('mysql',{title:'agentes mysql',rows:rows});
	});
});
module.exports = router;