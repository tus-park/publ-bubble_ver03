// JavaScript Document

$(document).ready(function() {
 $('.sitemapBtn').toggle(
	function(){
	$('div.fullNav').stop().animate({bottom:[100, 'easeOutBounce']},1000);
	$(this).text('사이트 맵▲');
 },
	function(){
	$('div.fullNav').stop().animate({bottom:[-60, 'easeOutBounce']},1000);
	$(this).text('사이트 맵▼');
 });
});
