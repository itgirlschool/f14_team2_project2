const img = document.getElementById('carousel_2');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['/assets/img/sell_img/diningroom.jpeg', '/assets/img/sell_img/apricotbedroom.jpg', '/assets/img/sell_img/light.jpg', '/assets/img/sell_img/kitchen.jpg', '/assets/img/sell_img/crimea_sell.jpeg'];

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