var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var conn = require('./config');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
})  ;

app.get('/login', function (req, res) {  
    res.sendFile( __dirname + "/" + "login.html" );  
 })  

// route untuk login dan registrasi
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8012);

// route untuk crud
