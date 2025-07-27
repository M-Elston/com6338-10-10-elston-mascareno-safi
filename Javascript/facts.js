const factsButton = document.getElementById('facts-button');
const factsContainer = document.getElementById('facts-container');

factsButton.addEventListener('click', function () {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json();
    })
    .then(function (imageData) {
      const imageURL = imageData.message;

      factsContainer.innerHTML = `<img src="${imageURL}" alt="Cute dog photo" />`;
    })
    .catch(function () {
      factsContainer.textContent = 'Oops! Could not fetch a dog image.';
    });
});



// Shared hamburger menu responsiveness for all pages in the project

var hamburgerBtn = document.querySelector('.hamburger-btn');
var navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', function () {
  var menuIsOpen = navLinks.classList.contains('show');
  navLinks.classList.toggle('show');
  hamburgerBtn.setAttribute('aria-expanded', !menuIsOpen);
});