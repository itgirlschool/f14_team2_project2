window.onload = () => {
    // var square = document.querySelector('.card-text__item');

    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('card-text__item-animation');
            }
        })
    }, options)

    var animUl = document.querySelectorAll('.card-text__item');
    if (animUl.length > 0) {

        for (let index = 0; index < animUl.length; index++) {
            observer.observe(animOnScroll[index]);
        }
    }

}


// var animUl = document.querySelectorAll('.card-text__item');
// if (animUl.length > 0) {
//     function animOnScroll(params) {
//         for (let index = 0; index < animUl.length; index++) {
//             const animItem = animOnScroll[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('card-text__item-animation');
//             }
//             // } else {
//             //     animItem.classList.remove('card-text__item-animation');
//             // }



//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {
//             top: rect.top + scrollTop,
//             left: rect.left + scrollLeft
//         }
//     }
// }