var now = 0;
$(".bt-prev").hide();

$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);

function onPrev() {
	if(now > 0) {
		now--;
		ani()
	}	
}

function onNext() {
	if(now < 3) {
		now++;
		ani()
	}
}

function ani() {
	$(".ban-wrap").stop().animate({"left": (-now * 100) + "%"}, 400, function(){
		
	})

}