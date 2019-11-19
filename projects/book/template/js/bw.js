
window.onload=function(){
$(function(){
	
	var testMovies={
			"movie1":{"imgSrc":"img/coffee/coffee-coffee-cup-cup-460257.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c1"},
			"movie2":{"imgSrc":"img/coffee/caffeine-ceramic-cup-close-up-1477851.jpg","info1":"卡布奇诺","info2":"特浓咖啡与蒸汽泡沫牛奶相结合","cate":"c1"},
			"movie3":{"imgSrc":"img/coffee/caffeine-coffee-cup-6347.jpg","info1":"南山咖啡","info2":"世上最优越的咖啡","cate":"c1"},
			"movie4":{"imgSrc":"img/coffee/caffeine-coffee-cup-129207.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c1"},
			
			"movie5":{"imgSrc":"img/coffee/blonde-coffee-cup-5186.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c2"},
			"movie6":{"imgSrc":"img/coffee/beverage-caffeine-cappuccino-1362536.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c2"},
			"movie7":{"imgSrc":"img/coffee/beverage-caffeine-cappuccino-1278681.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c2"},
			"movie8":{"imgSrc":"img/coffee/beverage-caffeine-cappuccino-1187317.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c2"},
			
			"movie9":{"imgSrc":"img/coffee/beverage-blur-caffeine-851555.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c3"},
			"movie10":{"imgSrc":"img/coffee/beverage-black-coffee-brewed-coffee-1627933.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c3"},
			"movie11":{"imgSrc":"img/coffee/beverage-black-coffee-brewed-1233528.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c3"},
			"movie12":{"imgSrc":"img/coffee/beverage-black-and-white-coffee-19586.jpg","info1":"拿铁咖啡","info2":"浓缩咖啡与牛奶的混合经典","cate":"c3"}
	};
	function appendMovieDiv(cateEl,imgSrc,info1,info2){
		var div=$('#movieTempl').clone(true);
		div.find(".movieImage img").attr('src',imgSrc);
		div.find('.movieInfo ul li:nth-child(1)')[0].innerText=info1;
		div.find('.movieInfo ul li:nth-child(2)')[0].innerText=info2;
		div.removeAttr("id");
		div.removeClass("hide");
		cateEl.append(div);
	}
	for(var mo in testMovies){
		var cateEl=$("#"+testMovies[mo].cate);
		var imgSrc=testMovies[mo].imgSrc;
		var info1=testMovies[mo].info1;
		var info2=testMovies[mo].info2;
		appendMovieDiv(cateEl,imgSrc,info1,info2)
	}
	$('.content>ul>li>div>.movieImage>img').addClass('gray');
	$(".content>ul>li>div>.movieImage>img").hover(function(){
		$(this).addClass("wc");
		$(this).removeClass("gray");
	},function(){
		$(this).removeClass("wc");
		$(this).addClass("gray");
	});
	$(".content .slideImages img").hover(function(){
		$(this).parent().removeClass("gray");
	},function(){
		$(this).parent().addClass("gray");
	});
	$(".content>ul>li>div.movie").hover(function(){
		$(this).find(".movieInfo>ul>li:nth-child(1)").css("color","white");
	},function(){
		$(this).find(".movieInfo>ul>li:nth-child(1)").css("color","rgb(240,240,240)");
	});
	$("#items .item .movie").click(function(){
		$("#coffeeDetail").show();
	})
	$("#coffeeDetail").click(function(){
		$("#coffeeDetail").hide();
		return false;
	})
	$("#coffeeDetail .coffeeDetail").click(function(){
		return false;
	})
})
	
}
