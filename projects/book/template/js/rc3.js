window.onload=function(){
$(function(){
	var outer=$(".RotationChart .rcContent>ul");//注意：用position的话，这个盒子是最大的那个盒子
	var imgDiv=$(".RotationChart .rcContent ul div.imgDiv").get(0);
	var timer=setInterval(scroll,3000);
	var timeo1=null;
	var timeo2=null;
	var timeo3=null;
	var left=0;
	$(imgDiv).css("left","0");
	var picTitles=["picture1","picture2","picture3","picture4","picture5"];
	
	
	$(".RotationChart div.navDot ul>li").click(function(){
		clearInterval(timer);//点击后清除计时器
		clearTimeout(timeo2);//防止存在正在等待中的计时器
		clearTimeout(timeo1);
		clearTimeout(timeo3);
		//点击后导航点事件
		var i=$(".RotationChart div.navDot ul>li").index(this);
		$(".RotationChart div.navDot ul>li").removeClass("navDotSelected");
		$(this).addClass("navDotSelected");
		$(".RotationChart .imgInfo .text").text(picTitles[i]);
		//点击后重新定义图片位置
		left=i*imgDiv.offsetWidth;
		outer.animate({
			left:-left+"px"
		},1000);
		
		timeo1=setTimeout(function(){
			timer=setInterval(scroll,3000);//等待1秒重启计时器
		},1000);
		
	});
	
	function scroll(){
		left+=imgDiv.offsetWidth;	
		var index=left/imgDiv.offsetWidth;
		timeo3=setTimeout(function(){
			$(".RotationChart div.navDot ul>li").removeClass("navDotSelected");
			$(".RotationChart div.navDot ul>li").eq((index+5)%5).addClass("navDotSelected");
			$(".RotationChart .imgInfo .text").text(picTitles[(index+5)%5]);
		},1000);
		if(left>imgDiv.offsetWidth*5){
			outer.removeClass("pchange");
			
			left=0;
			outer.animate({
				left:-left+"px"
			},0,function(){
				console.log($(imgDiv).css("left"));
				left+=imgDiv.offsetWidth;
				outer.animate({
					left:-left+"px"
				},1000);				
			});
		}
		else{
			outer.animate({
				left:-left+"px"
			},1000);
		}
	}
});	
}
