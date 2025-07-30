// Our Javascript - Can remove this line


// Header-Hamburger Button & Nav links
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !expanded);
});

// Footer Automatic Year Copyright
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('site-footer');
    const year = new Date().getFullYear();

    footer.innerHTML = `&copy; ${year} Our Site`;
})