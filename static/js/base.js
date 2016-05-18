$(document).ready(function(){

	// site mobile nav toggle
	$('#site-menu-toggle').on('click', function() {
		$(this).toggleClass('a--toggled');
		$('#slide-menu').toggleClass('a--active');
	});

	// courseware nav toggling
	$('.a--course-content__nav__mobile-toggle').on('click', function() {
		$('.a--course-content__nav__mobile-toggle').slideToggle();
		$('#course-nav-wrapper').slideToggle();
	});

	// execute css on-load animations
	$('.a--animated').addClass("a--do-animate");

	function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

	$(window).scroll(function () {
	   $('.a--animate-on-scroll.a--out-animation').each(function () {
	      if (isScrolledIntoView(this) === true) {
	          $(this).addClass('a--in-view');
	      } else {
					$(this).removeClass('a--in-view');
				}
	   });
	});

	$(window).scroll(function () {
	   $('.a--animate-on-scroll.a--no-out-animation').each(function () {
	      if (isScrolledIntoView(this) === true) {
	          $(this).addClass('a--in-view');
	      }
	   });
	});

	$('.a--reveal-on-load').each(function() {
		$(this).addClass('a--revealed');
	});

	$('.a--expanding-section').on('click', function() {
	 $('.a--expanding-section').each((function(index, el) {
		 $(this).removeClass('a--expanded');
			 }));
	 $(this).toggleClass('a--expanded');
 	});

	$("#discovery-expand-button").click(function() {
    $(this).toggleClass("activated");
    $("#discovery-expanding-area").slideToggle();
	})
});
