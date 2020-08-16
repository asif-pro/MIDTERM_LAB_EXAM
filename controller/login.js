var express 	= require('express');

var loginModel    = require.main.require('./models/loginModel');
var router 		    = express.Router();


router.get('/', function(req, res){
	res.render('login');
});

router.post('/', function(req, res){

	var user = {
		username: req.body.uname,
		password: req.body.password
	};

	loginModel.adminValidate(user, function(status){
		if(status){
loginModel.getAll(function(results){
		 var type = results.type;

		 //console.log(type);
	});


			req.session.username = user.username;
			res.redirect('/adminHome');
		}else{
			res.send('invalid username/password');
		}
	});

});


module.exports = router;