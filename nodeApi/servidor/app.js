var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  console.log('Nos llama: ' ,req.headers.host);

  //pedir a express un dato de una cabecera (headers)
  var esAndroid = req.get('User-Agent').match(/Android/i);
  if (esAndroid){
      console.log(req.get('User-Agent'));
  }

  req.Android = esAndroid;
  next(); 
});


//var dbMysql = require('./lib/dbMysql.js')
var dbMongo = require('./lib/dbMongo.js'); //no es necesario asignarlo a una variable
require ('./models/Agente.js'); //no es necesario asignarlo a una variable



app.use('/', require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/mysql',require('./routes/mysql'));
app.use('/agentes',require('./routes/agentes'));


//API Version 1
app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));

//Añadimos un nuevo controlador para dependencias
app.use('/dependencies',require('./routes/dependencies'));


//ZOna de administración

  //con basic auth
app.use('/admin', require ('./routes/admin'));

  //con token
app.use('/apiv1/admin2', require ('./routes/apiv1/admin2'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {  //hace un render del TEMPLETE error, que l pasa un objeto cn una propiedad message y err
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
