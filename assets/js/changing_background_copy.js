$(window).on("scroll touchmove", function() {
    var sellonscroll = '#eddde2';
    var sellmain = '#82c0cc';

    var buyscroll = '#82c0cc';
    var buymain = '#f0f0f0';

    var rentscroll = '#f0f0f0';
    var rentmain = '#eddde2';

    var educationscroll = '#f0f0f0';
    var educationmain = '#eddde2';

    var reviewsscroll = '#f0f0f0';
    var reviewsmain = '#82c0cc';

    changeColor("#sell", '.sell', sellmain, sellonscroll);
    changeColor("#buy", '.buy', buymain, buyscroll);
    changeColor("#rent", '.rent', rentmain, rentscroll);
    changeColor("#education", '.education', educationscroll, educationmain);
    changeColor("#reviews", '.reviews', reviewsmain, reviewsscroll);


});

function changeColor($block, $class, $color1, $color2) {
    if ($(document).scrollTop() >= $($block).position().top) {
        $($class).css('background', $color1);
    } else {
        $($class).css('background', $color2);
    };
}