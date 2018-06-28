
	


$(function(){
	
	
	var goodsid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
						console.log(data);
						var str1 = `<div id = "midpic"><img src="${data[0].goodsListImg}"><div id = "zoom"></div></div><ul id="smallpic">
					<li><img src="${data[0].goodsListImg}"></li>
					<li><img src="../images/main_1fpic4.jpg"></li>
					<li><img src="../images/main_1fpic5.jpg"></li>
					<li><img src="../images/main_1fpic6.jpg"></li>
					<li><img src="../images/main_1fpic7.jpg"></li>
				</ul><div id = "bigpic"><img src = "${data[0].goodsListImg}"></div>`
						$("#main-left").html(str1);
					var str2 = `
				<div class="title">
					<span>商品名</span>
					<a href="">戴维贝拉 dave&bella</a>
					<span>${data[0].goodsName}</span>
				</div>
				<div class="title2">
					<a href="">戴维贝拉超级大牌日</a>
					<span>${data[0].className}</span>
				</div>
				<div class="price-box">
					<div class="price-tit">
						<span>售价</span>
						<span>￥<em>${data[0].price}</em></span>
						<span>￥<i>268.00</i></span>
					</div>
					<div class="youhui">
						<span>优惠</span>
						<span>满减</span>
						<span>大牌日【每满200减20·不封顶】</span>
					</div>
					<div class="lingquan">
						<span>领券</span>
						<span>满6减5券</span>
					</div>
				</div>
				<br /><br />
				<div class="num">
					<p>数量</p>
					<div>
						<input type="button" class="btnone"  value="-" />
						<strong class="num1">0</strong>
						<input type="button" class="btntwo" value="+" />
					</div>
				</div>
				<p data-id = "${data[0].goodsID}" class="add">加入购物车</p>`
						
						$(".main-right").html(str2);
						
						//加减
							var count = $(".num1").text();
							console.log(count);
							$(".btnone").click(function(){
								
								count--;
								$(".num1").text(count);
								console.log("aa");
								if(count<1){
									alert("请添加商品数量");
								}
								
							})
							$(".btntwo").click(function(){
								console.log("aaa");
								count++;
								$(".num1").text(count);
							})		
						
						
						
						
						$(".add").click(function(){
							var goodsid = $(this).attr("data-id");
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid,number:count},function(data){
								console.log(data);
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功");
								}
							})
						})
		

		
		
		
						
					var oZoomBox = document.getElementById("main-left");
					var oMidArea = document.getElementById("midpic");
					console.log(oMidArea)
					var oMidImg = oMidArea.children[0];
					console.log(oMidArea);
					console.log(oMidArea.children);
					var oZoom = document.getElementById("zoom");
					var oBigArea = document.getElementById("bigpic");
					var oBigImg = oBigArea.children[0];
					var oSmallArea = document.getElementById("smallpic");
					var aLi = oSmallArea.children;
//					console.log(oSmallArea);
			for(let i = 0;i<aLi.length;i++){
				aLi[i].onmouseover = function(){
					var small = aLi[i].children[0];
					oMidImg.src = small.src;
					oBigImg.src = small.src;
				}
			}
		 	oMidArea.onmouseover = function(){
		 		oZoom.style.display="block";
		 		oBigArea.style.display="block";
		 	}
		 	oMidArea.onmouseout = function(){
		 		oZoom.style.display="none";
		 		oBigArea.style.display="none";
		 	}
		 	oMidArea.onmousemove = function(e){
		 		
		 		var evt = e || event;
		 		var _left = evt.pageX - oZoomBox.offsetLeft - oZoom.offsetWidth/2;
		 		var _top = evt.pageY - oZoomBox.offsetTop - oZoom.offsetHeight/2;
		 		if(_left <= 0){
		 			_left = 0;
		 		}
		 		if(_left >= oMidArea.offsetWidth - oZoom.offsetWidth){
		 			_left = oMidArea.offsetWidth - oZoom.offsetWidth;
		 		}
		 		if(_top <= 0){
		 			_top = 0;
		 		}
		 		if(_top >= oMidArea.offsetHeight- oZoom.offsetHeight){
		 			_top = oMidArea.offsetHeight - oZoom.offsetHeight;
		 		}

		 		oZoom.style.left = _left +"px";
		 		oZoom.style.top = _top +"px";

				oBigImg.style.left = -oZoom.offsetLeft/oMidArea.offsetWidth*oBigImg.offsetWidth +"px";
				oBigImg.style.top = -oZoom.offsetTop/oMidArea.offsetHeight*oBigImg.offsetHeight +"px";
		 	}
						
						
						
					})
					
		})
		
		
	
		
		
		
		
		
		
		
		
		
		
		
		
//*************************************************************
/*var str = location.search;

	var proId = str.split("=")[1];
	console.log(proId);
	//var productId = proId.slice(0,1);
		//console.log(productId);
	$.getJSON('http://datainfo.duapp.com/shopdata/getGoods.php?callback=?',function(data){
				console.log(data);
				var str1 = "";
				var str2 = "";
				for(var i=0;i<data.length;i++){
					if(proId == data[i].goodsID){
						str1 =`<div id = "midpic"><img src="${data[i].goodsListImg}"><div id = "zoom"></div></div><ul id="smallpic]">
					<li><img src="${data[i].goodsListImg}"></li>
					<li><img src="../images/main_1fpic4.jpg"></li>
					<li><img src="../images/main_1fpic5.jpg"></li>
					<li><img src="../images/main_1fpic6.jpg"></li>
					<li><img src="../images/main_1fpic7.jpg"></li>
				</ul><div id = "bigpic"><img src = "${data[i].goodsListImg}"></div>`;
					str2 = `
				<div class="title">
					<span>[包邮]</span>
					<a href="">戴维贝拉 dave&bella</a>
					<span>${data[i].goodsName}</span>
				</div>
				<div class="title2">
					<a href="">戴维贝拉超级大牌日</a>
					<span>纯棉绵柔 吸汗透气 卡通休闲 活泼可爱</span>
				</div>
				<div class="price-box">
					<div class="price-tit">
						<span>售价</span>
						<span>￥<em>${data[i].price}</em></span>
						<span>￥<i>268.00</i></span>
					</div>
					<div class="youhui">
						<span>优惠</span>
						<span>满减</span>
						<span>大牌日【每满200减20·不封顶】</span>
					</div>
					<div class="lingquan">
						<span>领券</span>
						<span>满6减5券</span>
					</div>
				</div>
				<br /><br />
				<div class="num">
					<p>数量</p>
					<div>
						<input type="button" id="btn11"  value="-" />
						<strong>1</strong>
						<input type="button" id="btn12" value="+" />
					</div>
				</div>
				<p class="add">加入购物车</p>
				<a href="cart.html">查看购物车</a>
			`;
			
					}
				}
				$("#main-left").html(str1);
				$(".main-right").html(str2);
				
				var sum = 0 ;
				$("#btn11").click(function(){
					sum--;
					if(sum<=0){
						sum = 0;
					}
					$("strong").text(sum);
				})
				$("#btn12").click(function(){
					sum++;
					$("strong").text(sum);
				})
				
				$(".add").click(function(){
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
								console.log(data);
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功");
								}
							})
						})*/
				
				
		

