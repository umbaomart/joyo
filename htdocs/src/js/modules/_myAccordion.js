export const myAccordion = () => {
    if ($('.js-accordion').length) {
        let accordionHeader = $('.js-accordion');
        accordionHeader.on('click', function () {
            $(this).parent().toggleClass('is-open');
            $(this).next().slideToggle();
        })
    }
}