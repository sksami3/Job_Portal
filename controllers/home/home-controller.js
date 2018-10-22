var express=require('express');
var router=express.Router();
var homeModel=require.main.require('./models/home/home-model');



router.get('/logout',function(req,res){

	if(req.session.una==null || req.session.une==null){
	res.redirect('/login');
	}

});


router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('login');

});

router.get('/login',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('login');

});

router.post('/',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		username:req.body.user_name,
		password:req.body.password
	};

	homeModel.validate2(user,function(result){

		if(result)
		{
			req.session.una=req.body.user_name;
			res.redirect('/admin/show');			
		}
		else
		{

			homeModel.validate1(user,function(result){

			if(result)
			{
				req.session.une=req.body.user_name;
				res.redirect('/employer');			
			}
			else
			{
				res.redirect('/');
			}

			});
		}

	});
});



module.exports=router;
