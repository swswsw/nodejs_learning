// the most basic express app

// remember to do     npm install express
var express = require("express");

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(8000);