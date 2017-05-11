var express = require('express');
var app = express();
var port = process.env.PORT | 3000;
var mongoose = require('mongoose')
var session = require('express-session')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var passport = require('passport')
var flash = require('connect-flash')
var morgan = require('morgan')
var db = require('./config/database.js')
var path = require('path')
var routes = require('./routes/routes.js')
require('./config/passport')(passport)
// require('./routes/routes.js')(app, passport)

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));
app.use(session({secret: 'ilovescotch'}))
app.use(passport.initialize());
app.use(passport.session())
app.use(flash());

app.use('/', routes)

app.listen(port)
console.log('the magic happens on port ' + port)
