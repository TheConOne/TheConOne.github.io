$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
});

function cursorAnimation() {
	$('#cursor').animate({
	    opacity: 0
	}, 'medium', 'swing').animate({
	    opacity: 1
	}, 'medium', 'swing');
}
