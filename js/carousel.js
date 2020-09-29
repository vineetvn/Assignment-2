const slide = document.querySelector('.carousel1');
const slides = Array.from(slide.children);
const next = document.querySelector('.right-button');
const prev = document.querySelector('.left-button');

const slideWidth = slides[0].getBoundingClientRect().width;
const setPosition = (slides, index) => {
    slides.style.left = slideWidth * index + 'px';
};
slides.forEach(setPosition);

next.addEventListener('click', e => {
    const currentSlide = slide.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    slide.style.transform = 'translate(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})

prev.addEventListener('click', e => {
    const currentSlide = slide.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;

    slide.style.transform = 'translate(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
})

const slide1 = document.querySelector('.carousel2');
const slides1 = Array.from(slide1.children);
const next1 = document.querySelector('.right-button1');
const prev1 = document.querySelector('.left-button1');

const slideWidth1 = slides1[0].getBoundingClientRect().width;
const setPosition2 = (slides, index) => {
    slides.style.left = slideWidth1 * index + 'px';
};
slides1.forEach(setPosition2);

next1.addEventListener('click', e => {
    const currentSlide = slide1.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    slide1.style.transform = 'translate(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})

prev1.addEventListener('click', e => {
    const currentSlide = slide1.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;

    slide1.style.transform = 'translate(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
})