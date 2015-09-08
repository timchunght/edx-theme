// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//



$("#dashboard-header__search-trigger").click(function() {
	console.log('test');
    $(this).toggleClass("activated");
    $("#dashboard-search-bar").slideToggle();
})