var express=require('express');
var router=express.Router();
var empModel=require.main.require('./Models/emp/emp-model');



router.get('*',function(req,res,next){
	if(req.session.une==null)
	{
		res.redirect('/login');
	}
	else
	{
		next();
	}
});

router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('emp/post');

});

//
router.post('/',function(req,res){
	
	userN = req.session.une;
	empModel.getByUn(userN,function(result){
		if(result)
		{
			
			var user={
				cn: req.body.Cname,
				jt: req.body.Jt,
				jl: req.body.jl,
				sl: req.body.sl,
				
			};

	empModel.insert(user,result.id,function(result){

		if(result)
		{
			//res.redirect("/admin/show");
			console.log("inserted");			
		}
		else
			{
				console.log(user.cn);
			}

		}); 
		}
		else
		{
			console.log("somossa");
		}
	})

	
});




router.get('/show',function(req,res){

	//res.send("<script>alert('hello')</script>");
	//res.render('admin/show');
	empModel.getAll(function(result){

		if(result.length>0){
			res.render('emp/show',{list: result});
			//console.log(result[0]);
		}
		else
		{
			res.redirect('/');
		}

	});

});




// router.get('/edit/:id', function(req, res){
	
// 		var userId = req.params.id;

// 		adminModel.getById(userId, function(result){
// 			res.render('admin/edit', {user: result});
// 		});

// });
// router.post('/edit/:id', function(req, res){
	
// 	var user={
// 		id:req.body.id,
// 		name:req.body.en,
// 		cn:req.body.cn,
// 		con:req.body.con,
// 		un:req.body.un,
// 		password:req.body.password
// 	};

// 	adminModel.update(user,function(status){
// 		if(status)
// 		{
// 			res.redirect('/admin/show');

// 		}
// 		else
// 		{
// 			res.send('Error in updating...');
// 		}
// 	});

// });
	/*if(req.body.username==req.body.password)
	{
		req.session.un=req.body.username;
		res.redirect('/home');
	}
	else
	{
		res.redirect('/login');
	}*/


// });

// router.get('/delete/:id',function(req,res){
	
// 	res.render('admin/delete');
	
// });


// router.post('/delete/:id',function(req,res){
// 	var id=req.params.id;
// 	if(req.body.yes)
// 	{
// 		adminModel.delete(id,function(status){
// 			if(status)
// 			{
// 				res.redirect('/admin/show');
// 			}
// 			else
// 			{
// 				res.send('Error in deleting...');
// 			}

// 		})
// 	}
// 	else
// 	{
// 		res.redirect('/admin/show');
// 	}
	
// });




module.exports=router;
