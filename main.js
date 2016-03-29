
// Include http module.
var http = require('http');

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
var server = http.createServer(function(req, res) {
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hello Http');
}).listen(8080);
