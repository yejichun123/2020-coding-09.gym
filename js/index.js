$(".navi").hover(function(){
	$(this).find(".navi-subs").stop().slideDown(300);
},function(){
	$(this).find(".navi-subs").stop().slideUp(300);
});

$(".navi").click(function(){
	
	$(this).css("color", "black")
	$(this).find(".navi-wrap").css("color", "#777777")
})


$(".bt-learn").hover(function(){
	$(this).find(".bt-animation").stop().fadeIn(300)
}, function(){
	$(this).find(".bt-animation").stop().fadeOut(300)
})

$(".class-list").hover(function(){
	$(this).find(".darken").stop().fadeOut(300)
	$(this).find(".class-name").stop().fadeOut(300)
	$(this).find(".class-pic").css("transform", "scale(1.1)")
}, function(){
	$(this).find(".darken").stop().fadeIn(300)
	$(this).find(".class-name").stop().fadeIn(300)
	$(this).find(".class-pic").css("transform", "scale(1)")
})

$(".ad-icon").hover(function(){
	$(this).find(".icon-sub").stop().slideDown(300)
}, function(){
	$(this).find(".icon-sub").stop().slideUp(300)
})