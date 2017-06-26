function setMainHeight() {
    minHeight = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();
    $('#main').css('min-height', minHeight);
}

$(document).ready(function() {
    window.cookieconsent.initialise(
        {
            "position": "top",
            "static": true,
            "container": document.getElementById("header"),
        }
    );
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $(document).foundation();
    setTimeout(setMainHeight, 1000);
});
