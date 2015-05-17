$.fn.animateInOut = function( animation1, animation2 ) {
	var animationIn = animation1;
	var animationOut = animation2;
	if ($(this).hasClass('clicked')) {
		$(this).addClass(animationOut + ' ' + 'animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(animationOut + ' ' + 'animated clicked').hide();
		});
	} else {
		$(this).addClass(animationIn + ' ' + 'animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(animationIn + ' ' + 'animated').addClass('clicked');
		});
	};

}


$('#animate').click(function() {
	event.preventDefault();
	$('#animation-div').animateInOut('bounceInDown', 'bounceOutUp');
});