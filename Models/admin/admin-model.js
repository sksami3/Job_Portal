var db=require('./db');


module.exports={

	// validate:function(user,callback)
	// {
	// 	var sql="SELECT * from user WHERE username=? and password=?";	
	// 	db.getResult(sql,[user.username,user.password],function(result){
	// 			if(result.length>0)
	// 			{
	// 				callback(true);
	// 			}
	// 			else
	// 			{
	// 				callback(false);
	// 			}

	// 	});
	// },

	getAll:function(callback)
	{
		var sql="SELECT * from employer";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	insert:function(user,callback)
	{
		var sql="INSERT INTO employer VALUES(null,?,?,?,?,?)";	
		db.execute(sql,[user.ename,user.cname,user.cno,user.uname,user.p],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	}

	// getById:function(id,callback)
	// {
	// 	var sql="SELECT * from user WHERE id=?";	
	// 	db.getResult(sql,[id],function(result){
	// 			if(result.length>0)
	// 			{
	// 				callback(result[0]);
	// 			}
	// 			else
	// 			{
	// 				callback([]);
	// 			}

	// 	});
	// },

	// update:function(user,callback)
	// {
	// 	var sql="UPDATE user SET username=?,password=? where id=?";	
	// 	db.execute(sql,[user.username,user.password,user.id],function(result){
	// 			if(result)
	// 			{
	// 				callback(true);
	// 			}
	// 			else
	// 			{
	// 				callback(false);
	// 			}

	// 	});
	// },


	// delete:function(id,callback)
	// {
	// 	var sql="DELETE from user where id=?";	
	// 	db.execute(sql,[id],function(result){
	// 			if(result)
	// 			{
	// 				callback(true);
	// 			}
	// 			else
	// 			{
	// 				callback(false);
	// 			}

	// 	});
	// },



	// searchByName:function(name,callback)
	// {
	// 	var sql="SELECT * from user WHERE username=?";	
	// 	db.getResult(sql,[name],function(result){

	// 			if(result.length>0)
	// 			{
					
	// 				callback(result);
	// 			}
	// 			else
	// 			{
					
	// 				callback([]);
	// 			}

	// 	});
	// }
};

