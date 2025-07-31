// My Javascript

// Carousel
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Assets/Images/bailey1.jpg",
        "Assets/Images/ellie.jpg",
        "Assets/Images/nose2nose.jpg",
    ];

    let currentImage = 0;
    const imgElement = document.getElementById("carousel-image");
    let autoRotateInterval;

    function showImage(index) {
        imgElement.src = images[index];
        imgElement.onload = () => {
            const container = document.querySelector('.info-gallery');
            container.style.height = imgElement.height + 'px';
            container.style.width = imgElement.width + 'px';
        };
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
        resetAutoRotate();
    }

    function prevImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        showImage(currentImage);
        resetAutoRotate();
    }

    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            currentImage = (currentImage + 1) % images.length;
            showImage(currentImage);
        }, 4000);
    }

    function resetAutoRotate() {
        clearInterval(autoRotateInterval);
        startAutoRotate();
    }

    if (imgElement) {
        showImage(currentImage);
        startAutoRotate();
    }

    window.nextImage = nextImage;
    window.prevImage = prevImage;


// Visit Tracker
    const messageEl = document.getElementById("lifetime-message");
    if (messageEl) {
        let lifetimes = localStorage.getItem("lifetimes");
        
    if (lifetimes === null) {
        lifetimes = 1;
    } else {
        lifetimes = parseInt(lifetimes) + 1;
    }

    localStorage.setItem("lifetimes", lifetimes);

    messageEl.textContent = `A visit is like a lifetime. You've visited ${lifetimes} time${lifetimes > 1 ? "s" : ""}`;
    }
});