var hidden = false;
$(document).ready(function() {
	$('.dialog-loading-icon').click(function() {
		$('.dialog-loading-wrapper').animate({left: '-=400px'}, 500);
	});
	$('#button').click(function() {
		$('.dialog-loading-wrapper').animate({left: '+=400px'}, 500);
	});
});