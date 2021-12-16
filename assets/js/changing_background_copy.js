$(window).on("scroll touchmove", function() {
    var sellonscroll = 'rgba(255, 167, 43, 0.404)';
    var sellmain = '#82c0cc';

    var buyscroll = '#82c0cc';
    var buymain = '#ede7e3';

    var rentscroll = '#ede7e3';
    var rentmain = 'rgba(255, 167, 43, 0.4)';

    var reviewsscroll = 'rgba(255, 167, 43, 0.4)';
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