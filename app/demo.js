const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello world");
})

app.get('/conguoiyeu', function(req, res){
	res.send('Got a route /conguoiyeu');
})

app.get('/khongconguoiyeu', function(req, res){
	res.send('Got a route /khongconguoiyeu');
})

app.get('/khongaithemyeu', function(req, res){
	res.send('Got a route /khongaithemyeu');
})


app.listen(3000);

