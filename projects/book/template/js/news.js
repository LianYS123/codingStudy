


$(function(){
	var vm=new Vue({
		el:'.Page',
		data:{
			show:false,
			leftShow:false,
			mode:false,
			modeNum:0
		},
		methods:{
			show1:function(){
				$("#aboutLeftLink").trigger("click");
			},
			show2:function(){
				$("#newsLeftLink").trigger("click");
			},
			show3:function(){
				$("#contactLeftLink").trigger("click");
			},
			contentClick:function(){
				this.leftShow=false;
			},
			ls:function(){
				this.leftShow=true;
				if(this.mode){
					this.$nextTick(function(){
						$(".more").addClass("darkMode");
						$(".more .leftOptions .leftHeader").addClass("darkMode");
						$(".more .leftOptions .leftItems li").addClass("darkHover");
					});
				}
			},
			searchShow:function(){
				this.show=true;
				if(this.mode){
					this.$nextTick(function () {
			           $(".header .searchContent .inputDiv input").addClass("darkMode");
						$(".header .searchDiv").addClass("darkMode");   
			        });
				}
			},
			changeMode:function(){
				
				var num = vm.modeNum;
				$.ajax({
					url:"files/video.json",
					success:function(data){change(data)},
					error:function(){
						console.log("Get failed, use default settings.")
						var videosObj={
							"芭蕾":{
								"videoUrl":"video/Ballet - 373.mp4",
								"depClass":""
							},
							"原子":{
								"videoUrl":"video/Atoms - 5205.mp4",
								"depClass":"filter_0px"
							},
							"黑色":{
								"videoUrl":"video/Black - 13495.mp4",
								"depClass":"filter_0px"
							},
							"雪":{
								"videoUrl":"video/Snowflakes - 6310.mp4",
								"depClass":"filter_0px"
							}
						};
						change(videosObj);
					}
				});

			}
		}
	});
	function change(videosObj){
		var num = vm.modeNum;
		var keys=Object.keys(videosObj);
		if(num>=keys.length){
			vm.mode=false;
			var player = videojs("bgVideo");
			player.pause();
			vm.modeNum=0;
			var modeStatus = {"mode":vm.mode,"modeNum":vm.modeNum};
			var modeStr = JSON.stringify(modeStatus);
			localStorage.setItem("modeStr",modeStr);
			return;
		}
		else{
			console.log(keys[num]+":start");
			var player = videojs("bgVideo");
			var url=videosObj[keys[num]].videoUrl;
			var decClass=videosObj[keys[num]].depClass;
			
			videojs.options.flash.swf = "__JS_/js/video-js.swf";
			player.src(url);
			player.load(url);
			
			$("#bgVideoDiv").addClass(decClass);
			num++;
			vm.modeNum=num;
			vm.$nextTick(function(){
				vm.mode=true;
				var modeStatus = {"mode":vm.mode,"modeNum":vm.modeNum};
				var modeStr = JSON.stringify(modeStatus);
				localStorage.setItem("modeStr",modeStr);
			})
		}
	}
	
	vm.$watch("mode",function(nval,oval){
		if(nval){
			addMode(); 
		}
		else{
			clearMode();
		}
	});
	
	function clearMode(){
		console.log("clearMode");
		$("#bgVideoDiv").hide();
		$("body").removeClass("darkMode");
		$(".header .searchContent .inputDiv input").removeClass("darkMode");
		$(".footer ul li").removeClass("darkMode");
		$(".header .searchDiv").removeClass("darkMode");
		$(".more").removeClass("darkMode");
		$(".more .leftOptions .leftHeader").removeClass("darkMode");	
		$(".more .leftOptions .leftItems li").removeClass("darkHover");
		$(".content ul>li .movie .movieInfo").removeClass("darkMode");
		$(".content .slideImages img").removeClass("imgOp");
		$(".detailDiv .coffeeDetail").removeClass("darkMode");
		$(".detailDiv .coffeeDetail .coffeeImage img").removeClass("imgOp");
		
	}
	function addMode(){
		console.log("addMode");
		$("#bgVideoDiv").show();
		$("body").addClass("darkMode");
		$(".header .searchContent .inputDiv input").addClass("darkMode");
		$(".footer ul li").addClass("darkMode");
		$(".header .searchDiv").addClass("darkMode");
		$(".more").addClass("darkMode");
		$(".more .leftOptions .leftHeader").addClass("darkMode");	
		$(".more .leftOptions .leftItems li").addClass("darkHover");
		$(".content ul>li .movie .movieInfo").addClass("darkMode");
		$(".content .slideImages img").addClass("imgOp");
		$(".detailDiv .coffeeDetail").addClass("darkMode");
		$(".detailDiv .coffeeDetail .coffeeImage img").addClass("imgOp");
	}
});
