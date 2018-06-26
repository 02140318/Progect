
;(function(){
	$(function(){
		
		
		$("#btn").click(function(){
			 console.log("aa");
			var username= $("#username");
			var pas = $("#pas")
	              
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userId:"111",password:"aaa"},function(data){
			console.log(data);
			if(data == 0){
						alert("用户名不存在");
					}
					else if(data == 1){
						alert("账号密码错误");
					}
					else{
						window.location.replace("../index.html");
	//				console.log(data);
					}
				
			})
	})
		
		
		
		
		
	})
	
	
	
	
	
})(jQuery)



