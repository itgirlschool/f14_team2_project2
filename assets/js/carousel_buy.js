const pics = document.getElementById('carousel_3');
const buyright = document.getElementById('buy_right-btn');
const buyleft = document.getElementById('buy_left-btn');

let pictures2 = ['/assets/img/rent_img/IMG_20211217_220540_309.jpg', '/assets/img/rent_img/IMG_20211217_220528_457.jpg', '/assets/img/rent_img/IMG_20211217_220530_008.jpg', '/assets/img/rent_img/IMG_20211217_220532_681.jpg', '/assets/img/rent_img/IMG_20211217_220534_530.jpg', '/assets/img/rent_img/IMG_20211217_220549_770.jpg'];


img.src = pictures2[0];
let position2 = 0;

const moveRight2 = () => {
    if (position2 >= pictures2.length - 1) {
        position2 = 0
        img.src = pictures2[position2];
        return;
    }
    img.src = pictures2[position2 + 1];
    position2++;
}

const moveLeft2 = () => {
    if (position2 < 1) {
        position2 = pictures2.length - 1;
        img.src = pictures2[position2];
        return;
    }
    img.src = pictures2[position2 - 1];
    position2--;
}

buyright.addEventListener("click", moveRight2);
buyleft.addEventListener("click", moveLeft2);