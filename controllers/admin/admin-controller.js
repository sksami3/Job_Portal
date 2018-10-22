var express=require('express');
var router=express.Router();
var adminModel=require.main.require('./models/admin/admin-model');



router.get('*',function(req,res,next){
	if(req.session.una==null)
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
			res.redirect("/admin/show");			
		}
		else
		{
			res.sent("can't insert");
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
			res.redirect('/admin');
		}

	});

});




router.get('/edit/:id', function(req, res){
	
		var userId = req.params.id;

		adminModel.getById(userId, function(result){
			res.render('admin/edit', {user: result});
		});

});
router.post('/edit/:id', function(req, res){
	
	var user={
		id:req.body.id,
		name:req.body.en,
		cn:req.body.cn,
		con:req.body.con,
		un:req.body.un,
		password:req.body.password
	};

	adminModel.update(user,function(status){
		if(status)
		{
			res.redirect('/admin/show');

		}
		else
		{
			res.send('Error in updating...');
		}
	});

});
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

router.get('/delete/:id',function(req,res){
	
	res.render('admin/delete');
	
});


router.post('/delete/:id',function(req,res){
	var id=req.params.id;
	if(req.body.yes)
	{
		adminModel.delete(id,function(status){
			if(status)
			{
				res.redirect('/admin/show');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/admin/show');
	}
	
});




module.exports=router;
