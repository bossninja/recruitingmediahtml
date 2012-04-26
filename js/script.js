/* Author:

*/

$(function() {
	$('div.account a.toggle').click(function(){
		$('div.account').toggleClass('active');
		$('div.account a.toggle span.person').toggleClass('hide');
		$('div.account ul').toggleClass('hide');
	});

	
});
