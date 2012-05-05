// matching certain route

// remember to do    npm install express
var express = require("express");

var app = express.createServer();

// match "/product/abc12"  where "abc12" is the productid
// to test - go to   http://localhost:8000/product/abc12
app.get("/product/:productid", function(req, res) {
	res.send("matched /product/:productid.   productid="+req.params.productid);
});



app.listen(8000);