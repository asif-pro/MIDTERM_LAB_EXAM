var express 	= require('express');

//var loginModel    = require.main.require('./models/loginModel');
var router 		    = express.Router();

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



module.exports = router;