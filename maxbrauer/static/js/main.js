function setMainHeight() {
    minHeight = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();
    $('#main').css('min-height', minHeight);
}

$(document).ready(function() {
    setMainHeight();
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $(document).foundation();
});
