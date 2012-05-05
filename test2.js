var http = require("http");

var s = http.createServer();
s.on("request", function(req, res) {
	req.on("data", function(d) {
		
	});
});
