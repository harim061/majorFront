$(document).ready(function(){
	var height =  $(".banner").height();
	var num = ($(".rolling li").length)/2;
	var max = height * 10;
	var move = 0;
	function noticeRolling(){
		move += height;
		$(".rolling").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});

	};
	noticeRollingOff = setInterval(noticeRolling,3000);
	$(".rolling").append($(".rolling li").first().clone());

	$(".rolling_stop").click(function(){
		clearInterval(noticeRollingOff);
	});
	$(".rolling_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,2800);
	});
});