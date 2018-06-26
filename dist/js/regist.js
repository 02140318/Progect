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
				if(data == 1){
					alert("注册成功！");
					window.location.replace("login.html");
				}
			})
		})
		
		

	
	
	
	})	
	
})(jQuery)