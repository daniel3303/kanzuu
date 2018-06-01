const HTTP = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = HTTP.createServer(function(request, response) {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/plain');
	response.end(request);
  
});

server.listen(port, hostname, () => {
  console.log('Server running.');
});