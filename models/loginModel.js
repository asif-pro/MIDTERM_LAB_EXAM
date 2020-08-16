var db = require('./db');

module.exports ={

		getAll: function(callback){
		var sql = "select * from admin";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

adminValidate: function(user, callback){
		var sql = "select * from admin where aID=? and pass=?";
		db.getResults(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},



	insert: function(emp, callback){
		var sql = "insert into admin values(?, ?, ?, ?)";
        
		db.execute(sql, ['',emp.id, emp.pass, 'emp' ], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}


	
}
