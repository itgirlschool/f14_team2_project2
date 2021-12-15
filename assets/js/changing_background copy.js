$(window).on("scroll touchmove", function () {
    var sellonscroll = '#ede7e8';
    var sellmain = '#82c0cc';

    changeColor("#sell", '.sell', sellmain, sellonscroll);
    changeColor("#buy", '.buy', sellonscroll, sellmain);
    changeColor("#rent", '.rent', sellmain, sellonscroll);
    changeColor("#reviews", '.reviews', sellonscroll, sellmain);

});

function changeColor($block, $class, $color1, $color2) {
    if ($(document).scrollTop() >= $($block).position().top) {
        $($class).css('background', $color1);
    } else {
        $($class).css('background', $color2);
    };
}