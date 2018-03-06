var {mongoose}= require('./config/db');
var bodyParser = require('body-parser');
var express= require('express');
var {route}= require('./router/route');

var app= express();
app.use(bodyParser.json());

route(app);

app.listen(3000,()=>{
   console.log("Connected at 3000 port");
});