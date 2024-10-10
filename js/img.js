window.onload = function() {
    const aboutImages = document.querySelectorAll('.about__img');
    aboutImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.right = '0';
            img.style.opacity = '1';
        }, index * 300);
    });

    const advantagesImages = document.querySelectorAll('.advantages__img');
    setTimeout(() => {
        advantagesImages.forEach((img) => {
            img.style.opacity = '1'; 
        });
    }, aboutImages.length * 300 + 1000);
};