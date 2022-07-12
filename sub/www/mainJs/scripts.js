$(function(){
	$('#slides1').bxSlider({
		prev_image: 'images/bprev.png',
		next_image: 'images/bnext.png',
		wrapper_class: 'slides1_wrap',
		margin: 0,
		auto: true,
		auto_controls: true
	});
});


   $(document).ready(function(){
 	  $('.active').hover(function(){
 		  $(".boxcaption", this).stop().animate({top:'135px'},'normal');
 	  }, function() {
 		  $(".boxcaption", this).stop().animate({top:'215px'},'normal');
 	  });
   });
