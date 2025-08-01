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