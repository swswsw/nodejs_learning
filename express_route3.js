// matching certain route

// remember to do    npm install express
var express = require("express");

var app = express.createServer();

// match "/product/abc12"  where "abc12" is the productid
// but the id must be 3 letter followed by 3-5 numbers
// to test - go to   http://localhost:8000/product/abc123
// this should work.
//    should not work    http://localhost:8000/product/abce12

// alternative of this regexp is
// [A-Za-z]{3}\\d{3,5}           
//  \\d is same as [0-9]
app.get("/product/:productid([A-Za-z][A-Za-z][A-Za-z][0-9]{3,5})", function(req, res) {
	res.send("matched /product/:productid.   productid="+req.params.productid);
});



app.listen(8000);