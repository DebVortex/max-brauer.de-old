function setMainHeight() {
    minHeight = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();
    $('#main').css('min-height', minHeight);
}

$(document).ready(setMainHeight);
$(document).foundation();
