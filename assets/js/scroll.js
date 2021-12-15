window.onload = () => {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('card-text__item-animation');
            }
        })
    }, options)

    const animUl = document.querySelectorAll('.card-text__item');

    animUl.forEach(elem => {

        observer.observe(elem);
    })
}