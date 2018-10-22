var express=require('express');
var router=express.Router();
var adminModel=require.main.require('./models/admin/admin-model');


router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('admin/registration');

});

//
router.post('/',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		ename: req.body.EName,
		cname: req.body.Cname,
		cno: req.body.cnum,
		uname: req.body.uname,
		p: req.body.pass
	};
	adminModel.insert(user,function(result){

		if(result)
		{
			console.log("inserted");			
		}
		else
		{
			console.log("mara khaw");
		}

	});
});

router.get('/show',function(req,res){

	//res.send("<script>alert('hello')</script>");
	//res.render('admin/show');
	adminModel.getAll(function(result){

		if(result.length>0){
			res.render('admin/show',{list: result});
			//console.log(result[0]);
		}
		else
		{
			res.redirect('/');
		}

	});

});


// router.post('/show',function(req,res){

// 	adminModel.getAll(function(result){

// 		if(result.length>0){
// 			//res.render('admin/show',{list: result});
// 			console.log(result[0]);
// 		}
// 		else
// 		{
// 			res.redirect('/');
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



module.exports=router;
