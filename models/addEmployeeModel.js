var db = require('./db');

module.exports ={

	/*getAdminId: function(id, callback){
		var sql = "SELECT `student_id` FROM `student` WHERE student_id LIKE '________02' ORDER BY `student_id` DESC LIMIT 1";
		
		db.getResults(sql, [id], function(results){
			//console.log(results);
			//console.log('2');
			if(results.length > 0){
				return callback(results[0]);
			}else{
				return callback([]);
			}
		});
	},*/

/*adminValidate: function(user, callback){
		var sql = "select * from admin where aID=? and pass=?";
		db.getResults(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/


	


				get: function(id, callback){
		var sql = "select * from emp where empID=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},



	getAll: function(callback){
		var sql = "select * from emp";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	insert: function(emp, callback){
		var sql = "insert into emp values(?, ?, ?, ?, ?)";

		db.execute(sql, ['', emp.id , emp.empName , emp.pass , emp.phone   ], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}


	
}
