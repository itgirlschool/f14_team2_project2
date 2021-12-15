$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() >= $("#sell").position().top) {
        $('.sell').css('background', $("#sell").attr("data-color"));
    };
    if ($(document).scrollTop() > $("#buy").position().top) {
        $('.buy').css('background', $("#buy").attr("data-color"))
    };
    if ($(document).scrollTop() >= $("#rent").position().top) {
        $('.rent').css('background', $("#rent").attr("data-color"))
    };
    if ($(document).scrollTop() >= $("#reviews").position().top) {
        $('.reviews').css('background', $("#reviews").attr("data-color"))
    };
});