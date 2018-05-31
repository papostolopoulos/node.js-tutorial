
//It determines how the requests are being handled
var connect = require("connect");
var http = require("http");
var port = process.env.PORT || 8888;

var app = connect();

function doFirst(req, res, next) {
  console.log("Bacon");
  next();
}

function doSecond(req, res, next) {
  console.log("Eggs");
  next();
}

app.use(doFirst);
app.use(doSecond)

var server = http.createServer(app);

server.listen(port, function () {
  console.log("Listening on", port, "for project 'node.js-tutorial'");
});
