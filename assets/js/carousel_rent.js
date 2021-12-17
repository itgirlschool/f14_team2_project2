const img = document.getElementById('carousel_2');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['/assets/img/rent_img/IMG_20211217_220540_309.jpg', '/assets/img/rent_img/IMG_20211217_220528_457.jpg', '/assets/img/rent_img/IMG_20211217_220530_008.jpg', '/assets/img/rent_img/IMG_20211217_220532_681.jpg', '/assets/img/rent_img/IMG_20211217_220534_530.jpg', '/assets/img/rent_img/IMG_20211217_220549_770.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);