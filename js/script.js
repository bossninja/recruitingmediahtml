/* Author:

*/

$(function() {

	$('div.account a.toggle').click(function() {
		$('div.account').toggleClass('active');
		$('div.account ul').toggleClass('hide');
	});

	$('.sub-navigation li a').hover(function() {
		$(this).find('span').toggleClass('active');
	});
	
});
