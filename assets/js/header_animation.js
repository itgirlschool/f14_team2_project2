//HEADER START
const hamburger = document.querySelector(".icon");
hamburger.addEventListener("click", () => {hamburger.classList.toggle("active");})

//HEADER END

function scrollValue() {
    var nav = document.querySelector('.navbar-header');
    var nav_item = document.querySelectorAll(".navbar-item_visual")
    var nav_item_nohover = document.querySelectorAll(".navbar-item_numbers")

    var scroll = window.scrollY;
    if (scroll < 200) {
        nav.classList.remove('navbar_background-color');
        for (var i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.remove('navbar-item_visual-scroll')
        }
        for (var i = 0; i < nav_item_nohover.length; i++) {
            nav_item_nohover[i].classList.remove('visual-no-hover_scroll')
        }
        
    } else {
        navbar.classList.add('navbar_background-color');
        
        for (var i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.add('navbar-item_visual-scroll')
        }
        for (var i = 0; i < nav_item_nohover.length; i++) {
            nav_item_nohover[i].classList.add('visual-no-hover_scroll')
        }
    }
}

window.addEventListener('scroll', scrollValue);
