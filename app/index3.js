var express= require('express');
var	app =	express();
var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/my_db',{useNewUrlParser: true , useUnifiedTopology: true  });
// mongo() this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify: true,});
app.set('view engine', 'pug');
app.set('views','./views');


var personSchema = mongoose.Schema({
	name: String,
	age: Number,
	nationality: String
});
// the above code defines the schema for a person and is used to create a Mongoose Mode Person
var Person = mongoose.model("Person", personSchema);

app.get('/person', function (req,res) {
	// var personInfo = req.body; //Get the parsed information
   
 //   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
 //      res.render('show_message', {
 //         message: "Sorry, you provided worng info", type: "error"});
 //   } else {
 //      var newPerson = new Person({
 //         name: personInfo.name,
 //         age: personInfo.age,
 //         nationality: personInfo.nationality
 //      });
		
 //      newPerson.save(function(err, Person){
 //         if(err)
 //            res.render('show_message', {message: "Database error", type: "error"});
 //         else
 //            res.render('show_message', {
 //               message: "New person added", type: "success", person: personInfo});
 //      });
 //   }
     res.render('person');
   })


app.get('/person', function (req,res) {
	var personInfo = req.body; //Get the parsed information
   
   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"});
   } else {
      var newPerson = new Person({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });
		
      newPerson.save(function(err, Person){
         if(err)
            res.render('show_message', {message: "Database error", type: "error"});
         else
            res.render('show_message', {
               message: "New person added", type: "success", person: personInfo});
      });
   }

})


// https://www.tutorialspoint.com/expressjs/expressjs_database.htm
app.listen(3100);