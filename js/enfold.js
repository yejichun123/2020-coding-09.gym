/*********** 사전지식 ***********/
/*
for(var i=0; i<$(".loader").length; i++) {
	console.log($(".loader").eq(i).parent());
	console.log($(".loader").eq(i).parents());
}

loaderInit();
function loaderInit() {
	$(".loader-wrap").each(function(){
		var $loaderWrap = $(this);
		var $loader = $(this).find(".loader");
		var $img = $(this).find("img");
		console.log( $img.eq(0).height(), $img.eq(1).height()  );
		var len = $img.length;	//2
		var cnt = 0;
		$(this).find(".loader").show();
		$(this).find("img").on("load", function() {
			console.log( $img.eq(0).height(), $img.eq(1).height()  );
			console.log( $(this) );
			cnt++;
			console.log(cnt, len, $loader);
			if(cnt == len) $loader.hide();
			// main-wrap을 위한 곳
			if($loaderWrap.hasClass("main-wrap")) {
				mainInit();
				mainPagerInit();
				onMainLeave();
			}
		});
	});
}

// dataSet 알아보기 
// API - Application Provider Interface
var $sample = $("#sample");
console.log( $sample );
console.log( $sample[0] );
//getter
console.log( $sample.attr("id") );
console.log( $sample.attr("class") );
console.log( $sample.data("name") );
console.log( $sample.data("speed") );
console.log( $sample.data("booldook") );
console.log( $sample.data("delay") );
//setter -> 객체 자체를 리턴해줌
console.log( $sample.attr("id", "sample2") );
console.log( $sample.attr("class", "sample2") );
console.log( $sample.data("name", "sample-data2") );
console.log( $sample.data("speed", 5000) );
console.log( $sample.data("booldook", false) );
console.log( $sample.data("delay", 2000) );
//getter
console.log( $sample.attr("id") );
console.log( $sample.attr("class") );
console.log( $sample.data("name") );
console.log( $sample.data("speed") );
console.log( $sample.data("booldook") );
console.log( $sample.data("delay") );


// 크기, 위치
console.log( $(".slogan-wrap").width(), $(".slogan-wrap").height() );
console.log( $(".slogan-wrap").innerWidth(), $(".slogan-wrap").innerHeight() );
console.log( $(".slogan-wrap").outerWidth(), $(".slogan-wrap").outerHeight() );
console.log( $(".slogan-wrap").outerWidth(true), $(".slogan-wrap").outerHeight(true) );
// width(), height() -> margin, padding, border를 제외한 크기
// innerWidth(), innerHeight() -> margin, border를 제외한 크기 - padding 포함
// outerWidth(), outerHeight() -> margin을 제외한 크기 - padding, bordrer 포함
// outerWidth(true), outerHeight(true) -> margin, padding, border 포함

console.log( $(".slogan-wrap").offset() );
console.log( $(".slogan-wrap").position() );
console.log( $(".slogan-wrap .contents").offset() );		// margin을 제외한 거리
console.log( $(".slogan-wrap .contents").position() );	// margin도 포함한 거리

console.log( $(".pf").eq(0).find(".desc").offset().left );			// 문서 끝으로 부터의 거리
console.log( $(".pf").eq(0).find(".desc").position().top );		// 기준점(내가 position모델일 떄 나의 부모)으로 부터의 거리

console.log( $(window).scrollTop() );		// 스크롤이 되어서 문서가 얼마나 위로 올라갔는지..

($window).scroll(function() {
	scTop = $(this).scrollTop();
	 $(".header").css("background-color", "white")
	if(scTop > 200)	$(".header").css("background-color", "beige")
	if(scTop > 1000)	$(".header").css("background-color", "orange")
	if(scTop > 2000)	$(".header").css("background-color", "red")
});
*/


/*********** 전역변수 ***********/
var scTop = 0;		// $(window).scrollTop()
var winHei = 0;		// $(window).Height()
var isWingShow = false;

var $mainSlide = $(".main-wrap .slide");
var mainNow = 0;
var mainLast = $mainSlide.length - 1;
var mainSpeed = 500;
var mainGap = 3000;
var mainInterval;
var mainPager = {off: '○', on: '●'};

var $aboutSlide = $(".about-wrap .slide");
var aboutNow = 0;
var aboutLast = $aboutSlide.length - 1
var aboutInterval;
var aboutGap = 4000;
aboutInit();
onAboutLeave();


/*********** 사용자정의 ***********/
function mainInit() {
	$(".main-wrap .slides").empty();
	// console.log($mainSlide); // -> 지워진 slide를 다시 붙이기 위해 밑에 addClass "slide"를 붙임
	// removeClass 는 position absolute를 없애서 main-wrap에 이미지만큼 height를 주기 위함
	$($mainSlide[mainNow]).appendTo(".main-wrap .slides").removeClass("slide");
}


function mainPagerInit() {
	for(var i=0, html; i<=mainLast; i++) {
		if(mainNow == i) html = '<span class="pager">'+mainPager.on+'</span>';
		else html = '<span class="pager">'+mainPager.off+'</span>';
		$(html).appendTo(".main-wrap .pagers").click(onMainPager);
	}
}

// var mainCircle = ['○', '●'];
// if(mainNow == i) html = '<span class="pager">'+mainCircle[1]+'</span>';

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


function pfResize() {
	var imgHeight = $(".pf").eq(0).find("img").height();
	$(".pf").height(imgHeight * 0.8);
	$(".pf").find("img").css("margin-top", (-imgHeight * 0.1)+"px");
}

function aboutInit() {
	$(".aboutSlide").height($aboutSlide.eq(0).height());
}

function aboutAni() {
	$aboutSlide.css("opacity", 0);
	$aboutSlide.eq(aboutNow).css("opacity", 1);
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
	winHei = $(this).innerHeight();
	pfResize();
	aboutInit();
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
	// console.log(scTop, $(".slogan-wrap .contents").offset().top, $(window).height);
	// console.log( scTop + winHei, $(".slogan-wrap .contents").offset().top );
	var sum = scTop + winHei;
	// var content = $(".slogan-wrap .content").offset().top;
	/* if(sum > content) {
		console.log("나타남");
	}
	else {
		console.log("안보임");
	} */
 	$(".ani").each(function(){
	 var top = $(this).offset().top;
	 if(sum > top) {
		 if($(this).data("delay")) $(this).css("animation-delay", $(this).data("delay"));
		 $(this).css("animation-name", "running");
		 // $(this).css("animation-name", $(this).data("ani"));
	 }
	//  else {
	// 	$(this).css("animation-name", "none");
	//  }  -> 넣으면 여러번 적용됨
 });
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

function onMainLoaded() {
$(".loader-wrap").imagesLoaded(function(){
	// console.log ( $(this) );  -> 객체가 바뀌어서 나옴
	// console.log ( $(this.elements[0]) );
	$(this.elements[0]).find(".loader").hide();
	/* console.log( $(".slogan-wrap").offset() );
	console.log( $(".slogan-wrap").position() );
	console.log( $(".slogan-wrap .contents").offset() );
	console.log( $(".slogan-wrap .contents").position() );
	*/
});
}

function onPfsLoaded() {
	pfResize();
	$(this.elements[0]).masonry({
		itemSelector: '.pf',
		columnWidth: '.pf-sizer',
		percentPosition: true
	});
}

function onAboutPrev() {
	aboutNow = (aboutNow == 0) ? aboutLast: aboutNow - 1;
	aboutAni();
}

function onAboutNext() {
	aboutNow = (aboutNow == aboutLast) ? 0: aboutNow + 1;
	aboutAni();
}

function onAboutHover() {
	clearInterval(aboutInterval);
}

function onAboutLeave() {
	aboutInterval = setInterval(onAboutNext, aboutGap);
}


function onTwitterClick() {
	// 1. 현재창에 링크
	// location.href = '//twitter.com';

	// 2. 새창에 링크
	window.open('//twitter.com');
}

/*********** 이벤트등록 ***********/
$(".bt-wing").click(onWingClick);
$(window).resize(onResize).trigger("resize") ;
$(window).scroll(onScroll);

$(".main-wrap .bt-prev").click(onMainPrev);
$(".main-wrap .bt-next").click(onMainNext);
$(".main-wrap").hover(onMainHover, onMainLeave);	// 콜백: onMainHover, onMainLeave
$(".main-wrap").imagesLoaded(onMainLoaded);

$(".pf-wrap .pfs").imagesLoaded(onPfsLoaded);

$(".about-slide .bt-prev").click(onAboutPrev);
$(".about-slide .bt-next").click(onAboutPrev);
$(".about-slide").hover(onAboutHover, onAboutLeave);

$(".footer .twitter").click(onTwitterClick);