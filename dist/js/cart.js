;(function(){
	

	$(function(){
				$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					
					var str = "";
					for(var i=0;i<data.length;i++){	
						console.log("aa");
					str += `<div class="shopp">
					<div>
						<input type="checkbox" class="checks"/>
					</div>
					<div>
						<dl>
							<dt>
								<img src="${data[i].goodsListImg}" alt="" />
							</dt>
							<dd>${data[i].className}</dd>
						</dl>
					</div>
					<div>${data[i].price}</div>
					<div>
							<p class="sub">-</p>
							<span class="num2">${data[i].number}</span>
							<p class="add">+</p>

					</div>
					<div>0.43kg</div>
					<div data-id="${data[i].goodsID}" class="delete">删除</div>
					<div>¥ 476.00</div>
					</div>`;
					}
					
					$("#category").html(str);
					
					
					
					
					//加减
					var count = $(".num2").text();
							console.log(count);
							$(".sub").unbind("click").click(function(){
								console.log("aaaaa");
								count--;
								$(".num2").text(count);
								console.log("aa");
								if(count<1){
									alert("是否删除商品");
									$(this).parent().remove();
								}
								
							})
							$(".add").unbind("click").click(function(){
								console.log("aaa");
								count++;
								$(".num2").text(count);
							})		
					
					//全选
					$("#selectall").click(function(){
						$("#category .checks").prop("checked",$(this).prop("checked"));
					})
					
					$("#category .checks").click(function(){
						if($("#category .checks:checked").length == $("#category .checks").length){
							$("#selectall").prop("checked",true);
						}else{
							$("#selectall").prop("checked",false);
						}
					})
					
					
					
					//删除商品
					$(".delete").unbind("click").click(function(){
						console.log($(this).attr("data-id"))
						$(this).parent().remove();
				
						$.getJSON("http://datainfo.duapp.com/shopdata/updatecar.php?callback=?",{userID:$.cookie("username"),goodsID:$(this).attr("data-id"),number:0},function(data){
					console.log(data);
					});
				
					})	
				})
	})
	

})(jQuery)
