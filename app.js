//Declearation
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var adminController = require('./controllers/admin/admin-controller');


//Config
app.set('view engine','ejs');


//MiddlewARE	
app.use(bodyParser.urlencoded({extended:false}));


//Routes
// app.use('/',loginController);
// app.use('/login',loginController);
app.use('/admin',adminController);


//Server Start
app.listen(3333,function(){
	console.log("app started at 3333");
});