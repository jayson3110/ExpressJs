var express= require('express');
var	app =	express();


app.set('view engine', 'pug');
app.set('views','./views');


var users = [{id: 1, name: 'Jayson'},{id: 2, name: 'BayAre'},{id: 1, name: 'Jayson Tien'}];


app.get('/', function (req,res) {
	res.render('first_view', {
		name: 'Jay'
	});
})

app.get('/users', function(req,res) {
	res.render('user', {
		users: users
	});
})

app.get('/users/search', function(req,res){
	var q = req.query.q;
	var matchedhUsed = users.filter(function(user){
		return user.name.indexOf(q) !== - 1;
	});
	res.render('user', {
		users: matchedhUsed
	})

})


app.listen(3000);

