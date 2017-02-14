var http = require('http');
var server = http.createServer(function(request, response) {
	if(request.url == '/products')
	{
		response.end('<html><body><h1>Listando produtos</h1></body></html>');
	}
	else
	{
		response.end('<html><body><h1>Home</h1></body></html>');
	}
});

server.listen(3000);

console.log('Server Running');