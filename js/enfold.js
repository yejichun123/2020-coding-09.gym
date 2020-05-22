/*********** 사전지식 ***********/


/*********** 전역변수 ***********/
var scTop = 0;
var isWingShow = false;

var $mainSlide = $(".main-wrap .slide");
var mainNow = 0;
var mainLast = $mainSlide.length - 1;
var mainSpeed = 500;
var mainGap = 3000;
var mainInterval;
var mainPager = {off: '○', on: '●'};
mainInit();
mainPagerInit();
onMainLeave();

/*********** 사용자정의 ***********/
function mainInit() {
	console.log($mainSlide); // -> 지워진 slide를 다시 붙이기 위해 밑에 addClass "slide"를 붙임
	// removeClass 는 position absolute를 없애서 main-wrap에 이미지만큼 height를 주기 위함
	$(".main-wrap .slides").empty();
	$($mainSlide[mainNow]).appendTo(".main-wrap .slides").removeClass("slide");
}

// var mainCircle = ['○', '●'];
// if(mainNow == i) html = '<span class="pager">'+mainCircle[1]+'</span>';

function mainPagerInit() {
	for(var i=0, html; i<=mainLast; i++) {
		if(mainNow == i) html = '<span class="pager">'+mainPager.on+'</span>';
		else html = '<span class="pager">'+mainPager.off+'</span>';
		$(html).appendTo(".main-wrap .pagers").click(onMainPager);
	}
}

// html: class를 안 주고 내용을 바꾸는 방식으로 pager 삽입
function mainAni() {
	$(".main-wrap .pager").html(mainPager.off);
	$(".main-wrap .pager").eq(mainNow).html(mainPager.on);
	// .slide에 top: 0;를 주면 prepend나 append 둘 다 줘도 됨
	$($mainSlide[mainNow]).prependTo(".main-wrap .slides")
	.css("opacity", 0)
	.addClass("slide")
	.stop()
	.animate({"opacity": 1}, mainSpeed, mainInit);
}

/*********** 이벤트콜백 ***********/
function onWingClick() {
	if(isWingShow) {
		isWingShow = false;
		$(".wing-wrap").css("background-color", "rgba(0, 0, 0, 0)");
		$(".wing-conts").css("transform", "translateX(350px)");
		setTimeout(function(){
			$(".wing-wrap").css("display", "none");
		}, 300);
	}
	else {
		isWingShow = true;
		$(".wing-wrap").css("display", "block");
		setTimeout(function(){
			$(".wing-wrap").css("background-color", "rgba(0, 0, 0, 0.4)");
		}, 0);
		setTimeout(function() {
			$(".wing-conts").css("transform", "translateX(0)");
		}, 300);
	}
}

function onResize() {
	// mobile -> pc
	if($(this).outerWidth()	>= 768) {
		isWingShow = true;
		onWingClick();
	}

	// pc -> mobile
	if($(this).outerWidth() < 768) {
		
	}
}

function onScroll() {
	scTop = $(this).scrollTop();
	$(".header").css("background-color", "white")
	if(scTop > 200)	$(".header").css("background-color", "beige")
	if(scTop > 1000)	$(".header").css("background-color", "orange")
	if(scTop > 2000)	$(".header").css("background-color", "red")
}


function onMainPrev() {
	mainNow = (mainNow == 0) ? mainLast : mainNow - 1;
	mainAni();
}

function onMainNext() {
	mainNow = (mainNow == mainLast) ? 0 : mainNow + 1;
	mainAni();
}

// console.log($(this).index);
function onMainPager() {
	mainNow = $(this).index();
	mainAni();
}

function onMainHover() {
	clearInterval(mainInterval);
}

function onMainLeave() {
	mainInterval = setInterval(onMainNext, mainGap);
}

/*********** 이벤트등록 ***********/
$(".bt-wing").click(onWingClick);
$(window).resize(onResize);
$(window).scroll(onScroll);

$(".main-wrap .bt-prev").click(onMainPrev);
$(".main-wrap .bt-next").click(onMainNext);
$(".main-wrap").hover(onMainHover, onMainLeave);	// 콜백: onMainHover, onMainLeave