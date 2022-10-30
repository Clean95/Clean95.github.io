const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const prevBtn = document.querySelector('button:nth-of-type(1)');
const nextBtn = document.querySelector('button:nth-of-type(2)');
const img = document.querySelector('div.img');

function buttonActive() {
    let flag = 0;
    if (this.classList.contains('active')) {
        if (this === prevBtn) {
            circles.forEach((circle, index) => {
                if (circle.classList.contains('active')) {
                    flag = index;
                }
            })
            circles[flag].classList.remove('blue-border', 'active');
            lines[flag - 1].classList.toggle('blue-border');
            img.style.backgroundImage = `url(img/z${flag}.jpg)`;

            if (flag == 1) {
                prevBtn.classList.remove('blue-bcg', 'active');
            } else {
                nextBtn.classList.add('blue-bcg', 'active');
            }
        } else {
            circles.forEach((circle, index) => {
                if (circle.classList.contains('active')) {
                    flag = index;
                }
            })

            circles[flag + 1].classList.add('active', 'blue-border');
            lines[flag].classList.toggle('blue-border');
            img.style.backgroundImage = `url(img/z${flag+2}.jpg)`;
            if (flag == (circles.length - 2)) {
                nextBtn.classList.remove('blue-bcg', 'active');
            } else {
                prevBtn.classList.add('blue-bcg', 'active');
            }
        }
    }
}
prevBtn.addEventListener('click', buttonActive);
nextBtn.addEventListener('click', buttonActive);