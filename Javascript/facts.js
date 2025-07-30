//This is the JavaScript for generating a random dog image only on the facts page
//This script also uses local storage to save and display the last fetched dog image

const factsButton = document.getElementById('facts-button');
const factsContainer = document.getElementById('facts-container');
const savedImage = localStorage.getItem('dogImage');
if (savedImage) {
  factsContainer.innerHTML = `<img src="${savedImage}" alt="Cute dog photo" />`;
}

factsButton.addEventListener('click', function () {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json();
    })
    .then(function (imageData) {
      const imageURL = imageData.message;
      localStorage.setItem('dogImage', imageURL);

      factsContainer.innerHTML = `<img src="${imageURL}" alt="Cute dog photo" />`;
    })
    .catch(function () {
      factsContainer.textContent = 'Woof! Could not fetch a dog image.';
    });
});



// Shared hamburger menu responsiveness for all pages in the project if needed
// This script only runs if both the hamburger button and nav links exist in your HTML
// Please do not remove this code, it is required for the facts page to function correctly
// If you need to use the hamburger menu on other pages, you can copy this code there

/* Commented-Out due to Conflict with shared.css 
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

if (hamburgerBtn && navLinks) {
hamburgerBtn.addEventListener('click', function () {
  const menuIsOpen = navLinks.classList.contains('show');
  navLinks.classList.toggle('show');
  hamburgerBtn.setAttribute('aria-expanded', !menuIsOpen);
});
}

End -Matt */