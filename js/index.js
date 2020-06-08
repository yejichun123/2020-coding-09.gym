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
	$(this).find(".class-pic").css("transform", "translateX(-16%) scale(1.1)")
}, function(){
	$(this).find(".darken").stop().fadeIn(300)
	$(this).find(".class-name").stop().fadeIn(300)
	$(this).find(".class-pic").css("transform", "translateX(-16%) scale(1)")
})

$(".ad-icon").hover(function(){
	$(this).find(".icon-sub").stop().slideDown(300)
}, function(){
	$(this).find(".icon-sub").stop().slideUp(300)
})



/************ 배너 ************/

var mainNow = 0;
var mainPrev, mainNext, mainLast;

function onMainNext(){
	$(".banner1-wrap").find("ban2").stop().animate({"top": 0}, 500);
}



$(".bt-prev").click(onMainPrev);
$(".banner1-wrap .bt-next").click(onMainNext);