var http = require("http");
var server = new http.Server();

server.on("request", function(req,res) {
	// change header type to html
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	// get user-agent
	// important: node.js lower case the header name.  so "User-Agent" won't work.  have to use "user-agent"
	res.write(req.headers["user-agent"] + "  <html> i'm here.  <b>you are there</b></html> ");
	
	res.end(" ");
});

server.listen(8000);
