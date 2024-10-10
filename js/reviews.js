let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}


document.getElementById('next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides; // Переход к следующему слайду
    updateSlider();
});


document.getElementById('prev').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Переход к предыдущему слайду
    updateSlider();
});


setInterval(function() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    updateSlider();
}, 10000);