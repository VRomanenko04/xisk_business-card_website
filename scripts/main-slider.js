const slideImgs = document.querySelectorAll('.slider__card');
let currentSlide = 0;

const slideArr = Array.from(slideImgs);

function nextSlide() {
    slideImgs[currentSlide].classList.add('active-card');
    slideImgs[currentSlide].classList.remove('active-card');
    currentSlide++;
    if (currentSlide === slideArr.length) {
        currentSlide = 0
    }
    slideImgs[currentSlide].classList.add('active-card');
}

let slideInterval = setInterval(nextSlide, 3000);

