; (function ($) {
    function isScrolledIntoView(element) {
        var scrollBottomPosition = $(window).scrollTop() + $(window).height();
        return ($(element).offset().top < scrollBottomPosition);
    }
    
    function addClassIfVisible(element) {
        $(element).each(function () {      
            if (isScrolledIntoView(this)) {
              $(this).addClass('is-visible');
            }
        });
    }
    
    addClassIfVisible('.fade-in');
    
    $(window).scroll(function () {
        addClassIfVisible('.fade-in');
    });
})(jQuery);

