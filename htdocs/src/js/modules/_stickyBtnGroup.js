export const stickyBtnGroup = () => {
    const sec02 = $('.sec02');
    const sec02Top = sec02.offset().top;

    if ($(window).scrollTop() > sec02Top && !$('.siteFooter').isInViewport()) {
        $('#js-sticky').addClass('is-visible');
    } else {
        $('#js-sticky').removeClass('is-visible');
    }
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};