// My Javascript

// Hero Banner API
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (!hero) {
        console.error('Hero section not found.');
        return;
    }

    const savedImage = localStorage.getItem('heroDogImage');

    if (savedImage) {
        hero.style.backgroundImage = `url(${savedImage})`;
    } else {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
            hero.style.backgroundImage = `url(${data.message})`;
            localStorage.setItem('heroDogImage', data.message);
            })
        .catch(err => console.error('Failed to fetch dog images:', err));
        }
});

    