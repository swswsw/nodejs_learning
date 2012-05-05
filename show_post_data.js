// listen to client request data and output back the same data.  
// http communication may be communicate in chunk.  

var http = require("http");
var server = new http.Server();

server.on("request", function(req,res) {
	res.writeHead(200, {});
	
	var totalContent = "";
	
	req.setEncoding("utf8");
	req.on("data", function(chunk) {
		res.write(chunk);
		// or we could do req.pipe(res);  then we don't need to do end as well.
		totalContent += chunk;
	});
	
	req.on("end", function() { 
		res.end(" "); 
	});
	
	
});

server.listen(8000);
