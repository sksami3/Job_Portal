//Declearation
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var adminController = require('./controllers/admin/admin-controller');
var homeController = require('./controllers/home/home-controller');

//Config
app.set('view engine','ejs');


//MiddlewARE	
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));


//Routes
app.use('/',homeController);
app.use('/login',homeController);
app.use('/admin',adminController);
app.use('/logout',homeController);


//Server Start
app.listen(3333,function(){
	console.log("app started at 3333");
});