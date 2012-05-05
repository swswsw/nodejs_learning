// matching certain route

// remember to do    npm install express
var express = require("express");

var app = express.createServer();


// match "pageabc123"
app.get(/\/pageabc123/, function(req, res) {
	res.send("match regexp");
});

app.listen(8000);