// JavaScript Document

$(document).ready(function() {
 $('#header .topbtn').toggle(
	function(){
	$('div.fullNav').stop().animate({top:[0, 'easeOutBounce']},1000);
	$(this).text('Menu Close▲');
 },
	function(){
	$('div.fullNav').stop().animate({top:[-160, 'easeOutBounce']},1000);
	$(this).text('Menu Open▼');
 });
});
