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

	$('.archives a.toggle').click(function() {
		var txt = $(this).find('span').text() == '\u002B Expand' ? '\u002D Collapse' : '\u002B Expand';
		$(this).find('span').text(txt);
		
		$('.archives ul').toggleClass('hide');
		return false;
	});
	
});
