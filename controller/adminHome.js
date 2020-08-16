var express 			= require('express');

var addEmployeeModel    = require.main.require('./models/addEmployeeModel');
var loginModel    		= require.main.require('./models/loginModel');
var router 		    	= express.Router();

router.get('*', function(req, res, next){
	if(req.session.username == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
	res.render('adminHome');
});

router.post('/', function(req, res){

	/*var user = {
		username: req.body.username,
		password: req.body.password
	};

	loginModel.validate(user, function(status){
		if(status){
			req.session.username = user.username;
			res.redirect('/adminHome');
		}else{
			res.send('invalid username/password');
		}
	});*/


});

	router.get('/addEmployee', function(req, res){
	res.render('addEmployee');
});


	router.post('/addEmployee', function(req, res){

		  var emp = {
      	id  		: req.body.id,
		empName 	: req.body.username,
		pass 		: req.body.password,
		phone 		: req.body.phone
	
	}

	addEmployeeModel.insert(emp, function(status){
		if(status){
			loginModel.insert(emp, function(status){
		if(status){
			res.render('adminHome');
		}else{
			console.log('Insertion Failed try again');
			
		}
	});
		}else{
			console.log('Insertion Failed try again');
			
		}
	});

	//res.render('addEmployee');
});



module.exports = router;