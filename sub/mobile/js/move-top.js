/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={
	inDelay:600,
	containerID:'toTop',
	scrollSpeed:1200,
	easingType:'linear'},
	settings=$.extend(defaults,options),
	containerIDhash='#'+settings.containerID,
	containerHoverIDHash='#'+settings.containerHoverID;
	$('body').on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},
		settings.scrollSpeed,settings.easingType);});
	$(window).scroll(function(){var sd=$(window).scrollTop();
  $(containerIDhash).fadeIn(settings.inDelay);});
};
})(jQuery);
