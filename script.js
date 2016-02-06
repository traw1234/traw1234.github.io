var hidden = false;
$(document).ready(function() {
	$('div').click(function() {
		if (hidden) {
			$(this).animate({left: '+=200px'}, 500);
			hidden = false;
		} else {
			$(this).animate({ left: '-=200px'}, 500);
			hidden = true;
		}
	});
});