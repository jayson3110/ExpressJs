var express= require('express');
var	app =	express();
var things = require('./things.js');
var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/my_db', { useNewUrlParser: true });

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/hello', function (req,res) { // request and response
	res.send("Hello World");
	// body...
});

app.post('/hello', function(req,res) {
	re.send("Hello World");
});	

app.all('/test', function(req, res){
	res.send("HTTP method doesn't have any effect on this route");
})

// app.get('/:id', function(req,res){
// 	res.send('The id you specified is ' + req.params.id);
// })


// app.get('/things/:name/:id', function(req, res){
// 	res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// });

// app.get('/things/:id([0-9]{5})', function(req, res){
// 	res.send('id: ' + req.params.id);
// });

// app.get('*', function(req,res){
// 	res.send('Sorry, this is an invalid URL.');
// })

app.use('/things', function(req, res,next){
	 console.log("A request for things received at " + Date.now());
	//This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    next();


});

// Route handler that sends the response
app.get('/things', function(req,res){
	res.send('Things');
	// next();

});


//First middleware before response is send 
app.use(function(req,res,next){
	console.log("Start")
	next();
});

//Route handler
app.get('/', function(req,res,next){
	res.send("Middle");
	next();
});

app.use('/', function(req,res){
	console.log('End');
});

app.get('/first_template', function(req, res){
	res.render('first_view');
});		

// app.get('/dynamic_view', function(req,res){
// 	res.render('dynamic', {
// 		name: "Tutorials Point",
// 		url:"http://www.tutorialspoint.com"
// 	})

// })

var personSchema = mongoose.Schema({
	name: String,
	age: Number,
	nationality: String
});
// the above code defines the schema for a person and is used to create a Mongoose Mode Person
var Person = mongoose.model("Person", personSchema);

app.get('/person', function (req,res) {
	res.render('person');
})

	
app.use('/things', things);

app.listen(3000);



// https://www.tutorialspoint.com/expressjs/expressjs_templating.htm

