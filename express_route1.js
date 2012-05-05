// matching certain route

// remember to do    npm install express
var express = require("express");

var app = express.createServer();

//
// match "/", "/products" and "/services"
//
app.get('/', function(req, res){
	// you can get path by req.path
    res.send('matched routing.  path='+req.path);
});

app.get('/products', function(req, res){
    res.send('matched routing  path='+req.path);
});

app.get('/services', function(req, res){
    res.send('matched routing  path='+req.path);
});

// you can add multiple app.get  it will try to match in order.

app.listen(8000);