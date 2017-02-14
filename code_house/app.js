var express = require('express');
var app = express();

app.get('/products', function(request, response){
	response.send('<html><body><h1>Listando produtos</h1></body></html>');
});

//starting the server
app.listen(3000, function(){
	console.log('Server running');
});