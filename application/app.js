var express = require('express');
var app = express();
var mongoose = require('mongoose');
var MONGO_DB_URI = 'mongodb://127.0.0.1/mean_app';
var Users = require('./models/myModel');
var cors = require('cors');
var routes = require('./routes/index');

var bodyParser = require('body-parser');

mongoose.connect(MONGO_DB_URI, {
    useMongoClient: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors());
app.use('/api',routes);


mongoose.connection.on('connected', function() {
    console.log('app is connected to mongodb ', MONGO_DB_URI);
});

mongoose.connection.on('error', err => {
    console.log('error while connecting to mongoose ', err);
});


app.get('/', function(req, res){
    return res.send('Welcome to MEAN App with Angular4+');
});

/*app.post('/users',function(req,res){
	console.log("saveing users");	
	if(!req.body.name) {
		return	res.status(400).send({err:"Name is required Filed"});
	}
	Users.create({
		name: req.body.name,
		address: req.body.address,
		city: req.body.city
	},function(err,saveduser){
		if(err) {
			return	res.status(500).send({err:"Name is required Filed"});
		}
		return	res.status(200).json(saveduser);
	});
});

app.get('/users',function(req,res){
	console.log("get all users");	
	Users.find({},function(err,alluser){
		if(err) {
			return	res.status(404).send(err);
		}
		return	res.status(200).json(alluser);
	});
});

app.get('/users/:id',function(req,res){
	console.log("get user by id");	
	let id = req.params.id;
	Users.findById(id,function(err,user){
		if(err) {
			return	res.status(404).send(err);
		}
		return	res.status(200).json(user);
	});
});

app.put('/users/:id',function(req,res){
	console.log("update user by id");	
	let id = req.params.id;
	if(!id) {
		return	res.status(404).send({err :"Invalid id"});
	}
	var updatedata = {};
	if(req.body.name) {
		updatedata.name = req.body.name;
	}
	if(req.body.city) {
		updatedata.city = req.body.city;
	}
	if(req.body.address) {
		updatedata.address = req.body.address;
	}
	Users.findByIdAndUpdate(id,updatedata, function(err,updateduser){
		if(err) {
			return	res.status(500).send(err);
		}
		return	res.status(200).json(updateduser);
	});
});

app.delete('/users/:id',function(req,res){
	console.log("delete user by id");	
	let id = req.params.id;
	if(!id) {
		return	res.status(404).send({err :"Invalid id"});
	}

	Users.findByIdAndRemove(id, function(err,deleteuser){
		if(err) {
			return	res.status(500).send(err);
		}
		if(!deleteuser) {
			return	res.status(404).send({err : "User not found by this id"});
		}
		return	res.status(200).json(deleteuser);
	});
});
*/
app.listen('3005', function() {
    console.log('App is running on PORT 3000');
});
