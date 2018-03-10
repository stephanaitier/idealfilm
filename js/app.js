var vidposup
var vidSize
$(document).ready(function() {
	vidSize = { width: $('.video').width(), height: $('.video').height() }
	$('#vid-cell-up,#vid-cell-down')
		.width(vidSize.width)
		.height(vidSize.height)
	vidposup = $('#vid-cell-up').position()
	$('.video').css({
		left: vidposup.left,
		top: vidposup.top
	})
	$('#fullpage').fullpage({
		scrollOverflow: true,
		onLeave: function(index, nextIndex, direction) {
			if (index == 1 && direction == 'down') {
				$('.video').animate({
					left: vidposup.left,
					top: '20px'
				})
			} else if (index == 2 && direction == 'up') {
				$('.video').animate({
					left: vidposup.left,
					top: vidposup.top
				})
			}
		}
	})
	$(window).bind('mousewheel', function(e) {
		var matrix = $('.fp-scroller').css('transform')
		var regExp = /(?:-)\d*?(?=\))/g
		var tY = regExp.exec(matrix)
		if (tY != null) {
			$('.video').css('transform', `translateY(${tY}px)`)
		} else {
			$('.video').css('transform', '')
		}
	})
	$('.cat').click(function() {
		let url = $(this).data('vid')
		console.log(url)
		loadIframe('show', url)
	})
})
$(window).resize(function() {
	vidSize = { width: $('.video').width(), height: $('.video').height() }
	$('#vid-cell-up,#vid-cell-down')
		.width(vidSize.width)
		.height(vidSize.height)
	vidposup = $('#vid-cell-up').position()
	$('.video').css({
		left: vidposup.left
	})
})
function loadIframe(iframeName, url) {
	var $iframe = $('#' + iframeName)
	if ($iframe.length) {
		$iframe.attr('src', url)
		return false
	}
	return true
}
