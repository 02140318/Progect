;(function(){
	$(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",function(data){
			console.log(data);
			var str = "";
			for(var i=0;i<data.length;i++){
				str += `<dl>
						<dt><a href="cart.html"><img src="${data[i].goodsListImg}" alt="" /></a></dt>
						<dd>${data[i].goodsName}</dd>
						<dd>${data[i].price}</dd>
						</dl>`	
			}
			$("#product_list").append(str);
		})
		
	})
	
	
	
//	html/detail.html?pid=${res.data[i].pid}&jsonname=sales
	
	
	
})(jQuery())
