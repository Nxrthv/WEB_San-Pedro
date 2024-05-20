function smoothScrollTo(sectionId) {
    const target = document.getElementById(sectionId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Duración de la animación en milisegundos
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
};

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slideCount) % slideCount;
    showSlide(currentSlide);
}

showSlide(currentSlide);