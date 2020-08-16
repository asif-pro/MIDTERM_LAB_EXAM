var express 	= require('express');

//var loginModel    = require.main.require('./models/loginModel');
var router 		    = express.Router();


router.get('/', function(req, res){
	res.render('login');
});

/*router.post('/', function(req, res){

	var user = {
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
	});

});*/


module.exports = router;