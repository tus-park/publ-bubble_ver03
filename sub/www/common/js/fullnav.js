$(document).ready(function() {
	 // $('ul.dropdownmenu li ul').hide();
	 // $('.menu_box').hide();

	 $('ul.dropdownmenu').hover(
		function() {
		 $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
 $('.menu_box').slideDown('fast',function(){$(this).stop();});
		},
	 function() {

 $('ul.dropdownmenu li.menu ul').fadeOut('fast');
		 $('.menu_box').slideUp('normal');
		});

		//  드롭다운 hover
		$('ul.dropdownmenu li.menu').hover(
		 function() {
			 $(this).children('ul').css('background','white').fadeIn('normal',function(){$(this).stop();});
		 });
 	$('ul.dropdownmenu li.menu').mouseleave(
		function(){
 			$(this).children('ul').css('background','none');
 	   });
		// test area


		$('ul.dropdownmenu li.menu').hover(
		function() {
 $('.depth1', this).animate({top:-50},1).clearQueue();
		},
	 function() {
 $('.depth1', this).animate({top:0},1).clearQueue();
		});


		//키보드 탭키처리 코드
				 $('ul.dropdownmenu li.menu .depth1').bind('focus', function () {
									 $('ul.dropdownmenu li.menu ul').slideDown('normal');
									 $('.menu_box').slideDown('fast');
				 });

				$('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {
								 $('ul.dropdownmenu li.menu ul').slideUp('fast');
								 $('.menu_box').slideUp('normal');
				});
});
