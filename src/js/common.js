$(document).ready(function() {


// Start video

	$('.video__control').on('click', function() {

		var video = $('#bgVideo');

    if(video[0].paused) {
        video[0].play();
				$('.header').addClass('hidden');
				$('.play').toggleClass('stop');
    }
    else {
        video[0].pause();
				video[0].currentTime = 0;
				$('.header').removeClass('hidden');
				$('.stop').removeClass('stop');
    }
    return false;
	});

// End video



// Start animation

	var sr = ScrollReveal();

	sr.reveal('.call-wrap, .call-wrap_bottom', {
		origin: 'bottom',
		distance: '200px',
		viewFactor: 0.5,
		duration: 700
	});

	sr.reveal('.card__ico, .card__ico_tip', {
		origin: 'left',
		distance: '200px',
		viewFactor: 1,
		duration: 700
	});

	sr.reveal('.card__head, .card__content, .link', {
		origin: 'right',
		distance: '200px',
		viewFactor: 1,
		duration: 700
	});

	sr.reveal('.card__ico_left', {
		origin: 'right',
		distance: '200px',
		viewFactor: 1,
		duration: 700
	});

	sr.reveal('.card__head_left, .card__content_left', {
		origin: 'left',
		distance: '200px',
		viewFactor: 1,
		duration: 700
	});

// End animation



// Start popup

	$('.link').magnificPopup({
	  type: 'ajax'
	});

// End popup



// Start scrollbar and validate

$(document).ajaxComplete(function() {

	$('.help-wrap').mCustomScrollbar({
					axis:'y',
					theme: 'minimal'
				}).on('mouseenter',function(){ //cross-domain iframe mousewheel hack
					$(this).find('iframe').css('pointer-events','none');
				}).on('mouseup',function(){
					if(!$(this).find('.mCSB_scrollTools_onDrag').length) return;
					setTimeout(function(){ $('.help-wrap').trigger('mouseenter'); },1);
				});
				$(window).on('blur',function(){
					$('.help-wrap iframe').css('pointer-events','auto');
				}).on('focus',function(){
					$('.help-wrap').trigger('mouseenter');
				});

	$('#help-form').validate({
		errorPlacement: function(error, element) {}
	});

});

// End scrolbar and validate



});
