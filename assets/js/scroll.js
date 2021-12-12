(function () {
    var square = document.querySelector('.card-text__item');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('card-text__item-animation');
            }
        });
    });

    observer.observe(square);
})();