$(".navi").hover(function(){
	$(this).find(".navi-subs").stop().slideDown(300);
},function(){
	$(this).find(".navi-subs").stop().slideUp(300);
});

$(".navi").click(function(){
	
	$(this).css("color", "black")
	$(this).find(".navi-wrap").css("color", "#777777")
})