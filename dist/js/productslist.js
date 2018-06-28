;(function(){
	$(function(){
		var classid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
			console.log(data);
			var str = "";
			for(var i=0;i<data.length;i++){
				str += `<dl>
						<dt><a href="detail.html?pid=${data[i].goodsID}"><img src="${data[i].goodsListImg}" alt="" /></a></dt>
						<dd>${data[i].goodsName}</dd>
						<dd>${data[i].price}</dd>
						</dl>`	
			}
			$("#product_list").append(str);
		})
		
	})
	
	
	
//	html/detail.html?pid=${data[i].goodsID}&jsonname=sales
	
	
	
})(jQuery())
