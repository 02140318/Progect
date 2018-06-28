;(function(){
	$(function(){
		
		$("#now #regist").click(function(){
			console.log("aaa");
			var username1Val= $("#username").val();
			var pas1Val = $("#pas").val();
			var commitVal = $("#commit").val();
			$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:$("#username1").val(),password:$("#pas1").val()},function(data){
				console.log(data);
//				if(username1Val != commitVal){
//				     alert("密码不一致");
//				}
				
				 if(data == 0){
					alert("用户名重名请重新输入！");
				}
				else if(data == 1){
					alert("注册成功！");
					window.location.replace("login.html");
				}else{
					alert("注册失败，请重试");
				}
			})
		})
		

	})	
	
		//开始写正则判断
			$("#username1").change(function(){
				var flag1 = true;
				var flag2 = true;
				var reg = 	/^1(3|5|7|8)\d{9}$/;//手机号码
				if($("#username1").val().length <= 3){
					$("#username1").text("用户名不能小于4个字符");
					flag1 = false;
				}
				if(reg.test($(this).val())==false && flag1){
					$("#username1").text("请正确输入手机号码");
					flag2 = false;
				}
				
				
				if(flag1 && flag2){
					$("#username1").text("请输入密码");
				}			
			});  //用户注册结尾
			
			//输入密码
			$("#pas1").change(function(){
				var reg1 = /[a-zA-Z0-9_]/g;
				if(reg1.test($(this).val()) ==false){
					$("#pas1").text("密码只能包含数字字母和下划线");					
				}
				if(reg1.test($(this).val())){
					$("#pas1").text("密码格式正确");	
				}
							
			});   //密码结尾
			
			//确认密码
			$("#check").change(function(){
				if($(this).val() != $("#psw1").val()){
					alert("两次输入的密码不一致");					
				}
											
			});   //确认密码结尾
			 
			 //验证码
			/* $("#psw3").change(function(){
				if($(this).val().toUpperCase() != $("#changpic").text()){
					$("#regist_tishi").text("验证码输入错误");					
				}											
			});*/   //验证码结尾
	
	
	
})(jQuery)