// get the data from gogole.com and print to console
var http = require("http");
var options = {
		host: "www.google.com",
		port: 80,
		path: "/"
};

var clientReq = http.get(options, function(clientResp) {
	console.log("got response: " + clientResp.statusCode);
	
	var chunkCount = 0;
	clientResp.on("data", function(data) {
		chunkCount++;
		console.log("chunk " + chunkCount + " data: " + data);
	});
	
});

clientReq.on("error", function(e) {
	console.log("got error: " + e.message);
});


