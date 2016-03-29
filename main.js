/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: nodejs.app
 *
 */


// Include http module.
const http = require('http');
// Include url module, which is helpful in parsing request parameters.
const url = require('url');
//Include fs module, which is helpful in reading and writing files.
const fs = require("fs");

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
const server = http.createServer((request, response) => {
  // Parse the request for arguments and store them in _get variable.
	// This function parses the url from request and returns object representation.
	var _get = url.parse(request.url, true).query;

  response.writeHead(200,{'Content-Type': 'text/plain'});
  // Send data and end response.
  var output = '\n\n\n\n\t\t\t\tHello World!!\n\n\t\t\t\tName:\t\t' + _get['name'] + '\n\n\t\t\t\tAge:\t\t' + _get['age'];
  // Write request parameters to a file
  fs.appendFile('file.txt', output, 'utf8', (err) => {
    if (err) throw err;
    console.log('The data was appended to file!');
  });
  response.end(output);

}).listen(8080); // Listen on the 8080 port.

console.log('Server running at http://localhost:8080/');
