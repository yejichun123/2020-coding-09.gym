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


var $ban = $(".ban"); 				
var last = $ban.length - 1; 

function onMainNext(){
	$(".banner1-wrap > .ban2").stop().animate({"top": 0 + "%"}, 500, function(){
	
	});
	$(".banner1-wrap > .ban1").stop().animate({"top": 100 + "%"}, 1000, function(){

	});
	// setTimeout (function(){
	// 	$(".banner1-wrap > .ban2").removeClass("ban2").addClass("ban1");
	// 	$(".banner1-wrap > .ban3").removeClass("ban3").addClass("ban2");
	// 	$(".banner1-wrap > .ban4").removeClass("ban4").addClass("ban3");
	// 	$(".banner1-wrap > .ban1").removeClass("ban1").addClass("ban4");
	// }, 500);
}

function onMainPrev(){
	$(".banner1-wrap > .ban4").stop().animate({"top": 0 + "%"}, 500, function(){
		$(this).removeClass("ban4").addClass("ban1");
		$(".ban3").removeClass("ban3").addClass("ban4");
	});
	$(".banner1-wrap > .ban1").stop().animate({"top": 100 + "%"}, 1000, function(){
		$(".ban4").removeClass("ban4").addClass("ban3");
		$(this).removeClass("ban1").addClass("ban4");
	});
}



$(".banner1-wrap .bt-prev").click(onMainPrev);
$(".banner1-wrap .bt-next").click(onMainNext);