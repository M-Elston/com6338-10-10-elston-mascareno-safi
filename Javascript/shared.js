// Our Javascript - Can remove this line

// Footer Automatic Year Copyright
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('site-footer');
    const year = new Date().getFullYear();

    footer.innerHTML = `&copy; ${year} Our Site`;
})