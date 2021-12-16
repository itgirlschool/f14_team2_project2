$(window).on("scroll touchmove", function () {
    var sellonscroll = '#ede7e8';
    var sellmain = '#82c0cc';

    var buyscroll = '#ede7e3';
    var buymain = '#82c0cc';

    var rentscroll = '#ede7e3';
    var rentmain = '#82c0cc';

    var reviewsscroll = '#ede7e8';
    var reviewsmain = '#82c0cc';

    changeColor("#sell", '.sell', sellmain, sellonscroll);
    changeColor("#buy", '.buy', buymain, buyscroll);
    changeColor("#rent", '.rent', rentmain, rentscroll);
    changeColor("#reviews", '.reviews', reviewsmain, reviewsscroll);

});

function changeColor($block, $class, $color1, $color2) {
    if ($(document).scrollTop() >= $($block).position().top) {
        $($class).css('background', $color1);
    } else {
        $($class).css('background', $color2);
    };
}