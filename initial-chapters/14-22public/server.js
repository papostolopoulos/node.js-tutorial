var http = require("http");
var port = process.env.PORT || 8888;
var fs = require("fs");

//404 response
function send404Response(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404: page not found");
  response.end();
}

//Handle a user request
function onRequest(request, response){
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("index.html").pipe(response);
  }
  else {
    send404Response(response);
  }
}

var server = http.createServer(onRequest);

server.listen(port, function () {
  console.log("Listening on port", port, "and for project 'node.js-tutorial' from 'theNewBoston'");
});
