;(function(){
	$(function(){
		$("#top_message>span").one("click",function(){
		console.log("aa");
		$("#top_message_wrap").hide();
	})
	
	
	
//	楼梯*********************************
var flag = true;
			$(window).scroll(function(){
				if(flag){
					var scrollTop = $(this).scrollTop();
					if(scrollTop > 500){
						$("#floorNav").fadeIn();
					}else{
						$("#floorNav").fadeOut();
					}
					
					$("#main_left_top").each(function(){
						if(scrollTop >= $(this).offset().top - $(this).outerHeight()/2){
							console.log(scrollTop);
							//console.log($(this).offset().top);
							var index = $(this).index();
							$("#floorNav li").eq(index).addClass("hover").siblings().removeClass("hover");
						}
					})
				}
			})
			
			$("#floorNav li:not(:last)").click(function(){
				flag = false;
				var index = $(this).index();
				$(this).addClass("hover").siblings().removeClass("hover");
				$("html,body").animate({"scrollTop":$("#content li").eq(index).offset().top},500,function(){
					flag = true;
				});
				
			})
			$("#floorNav li:last").click(function(){
				flag = false;
				$("html,body").animate({"scrollTop":0},500,function(){
					flag = true;
				});
				
			})
	
	
	
	
	
	
		
		
	//搜索
	
	
	
	//轮播
	
	var num = 0;
	var timer = setInterval(function(){
		//console.log("aa");
		num++;
		if(num==$(".pic li").length){
			num = 0;
		}
		$(".pic li").eq(num).fadeIn().siblings().fadeOut();
		
		$(".nav li").eq(num).addClass("select").siblings().removeClass("select");
	},2000)
	

		
		
		
	//小轮播
	var num1 = 0;
	
var timer1 = setInterval(function(){
		//console.log("aa");
		num1++;
		if(num1==$(".main_list li").length){
			num1 = 0;
		}
		$(".main_list li").eq(num1).fadeIn().siblings().fadeOut();
		
		$(".main_nav li").eq(num1).addClass("select1").siblings().removeClass("select1");
	},1000)
		
	
//	side
//点击回到顶部
		$("#side a:last").click(function(){
			
			$("html,body").animate({"scrollTop":0},5000,function(){
						
					})
			console.log("aa");
		})
		
	})
	
	
	
	
	
	
	
	
	
})(jQuery);
