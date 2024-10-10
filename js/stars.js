function generateRandomStars(ratingElementId) {
    const starRating = Math.floor(Math.random() * 3) + 3;
    const starContainer = document.getElementById(ratingElementId);

    starContainer.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = (i <= starRating) ? '★' : '☆';
        starContainer.appendChild(star);
    }
}

generateRandomStars('starRating1');
generateRandomStars('starRating2');
generateRandomStars('starRating3');
generateRandomStars('starRating4');