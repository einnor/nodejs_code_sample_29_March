/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: nodejs.app
 *
 */


// Include http module.
var http = require('http');
// Include url module, which is helpful in parsing request parameters.
var url = require('url');

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
var server = http.createServer(function(request, response) {
  // Parse the request for arguments and store them in _get variable.
	// This function parses the url from request and returns object representation.
	var _get = url.parse(request.url, true).query;

  response.writeHead(200,{'Content-Type': 'text/plain'});
  // Send data and end response.
  response.end('Hello World\n\nName:\t\t' + _get['name'] + '\n\nAge:\t\t' + _get['age']);

}).listen(8080); // Listen on the 8080 port.
