(function () {
    var squareWrapper = document.querySelector('.square-wrapper');
    var square = squareWrapper.querySelector('.square');
    square.classList.remove('square-transition');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                square.classList.add('square-transition');
                return;
            }

            square.classList.remove('square-transition');
        });
    });

    observer.observe(squareWrapper);
})();