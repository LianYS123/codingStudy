$(function(){
	$.get("files/desc.json",function(data){
		console.log(data.title);
		$("#title").empty().text(data.title);
		$("#desc").text(data.content);
	});
	$.ajax({
		url:"files/desc.json",
		success:function(data){
			console.log(data.title);
			$("#title").empty().text(data.title);
			$("#desc").text(data.content);
		},
		error:function(){
			$("#title").empty().text("Failed to load title");
			$("#desc").text("Failed to load content");
		}
	})
})
