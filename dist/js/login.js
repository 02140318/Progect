
;(function(){
	$(function(){
		
		
		$("#btn").click(function(){
			 console.log("aa");
			var username= $("#username");
			var pas = $("#pas")
	              
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:username.val(),password:pas.val()},function(data){
			console.log(data);
			data = JSON.parse(data);
			if(data == 0){
						alert("用户名不存在");
					}
					else if(data == 2){
						alert("账号密码错误");
					}
					else{
						$.cookie("username",data.userID,{expires:7,path:"/"});
						console.log("aa");
						window.location.replace("../index.html");
	//				console.log(data);
					}
				
			})
	})
		
		
		
		
		
	})
	
	
	
	
	
})(jQuery)



