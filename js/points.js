const points = document.querySelectorAll('.point');
let currentIndex = 0;
const swingDuration = 500;
const imageDelay = 1500;
const totalDuration = 20000;

function swingImage(index) {
    const currentImage = points[index];

    points.forEach(img => {
        img.style.transform = 'translateX(0)';
    });

    currentImage.style.transform = 'translateX(10px)';

    setTimeout(() => {
        currentImage.style.transform = 'translateX(-10px)';
    }, swingDuration);

    setTimeout(() => {
        currentImage.style.transform = 'translateX(0)'; 
    }, swingDuration * 2);
}

function swingImagesSequence() {
    for (let i = 0; i < points.length; i++) {
        setTimeout(() => {
            swingImage(i);
        }, i * imageDelay);
    }
}

setInterval(swingImagesSequence, totalDuration);

swingImagesSequence();