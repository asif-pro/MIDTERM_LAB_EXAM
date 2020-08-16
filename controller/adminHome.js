var express 			= require('express');

var addEmployeeModel    = require.main.require('./models/addEmployeeModel');
var loginModel    		= require.main.require('./models/loginModel');
var deleteModel    		= require.main.require('./models/delete');
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


router.get('/allEmployeeList', function(req, res){

				addEmployeeModel.getAll(function(results){
		res.render('allEmployeeList', { empList : results, uname: req.session.username});
	});
	
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
						addEmployeeModel.getAll(function(results){
		res.render('allEmployeeList', { empList : results, uname: req.session.username});
	});
		
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




router.get('/delete/:id', function(req, res){
	
	addEmployeeModel.get(req.params.id, function(result){
		res.render('delete', {emp: result});
	});
	
});

router.post('/delete/:id', function(req, res){

	deleteModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/adminHome/allEmployeeList');
		}else{
			//res.redirect('/home');
		}
	});
});




module.exports = router;