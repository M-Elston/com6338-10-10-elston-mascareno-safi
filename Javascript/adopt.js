const API_KEY = "ZUkuyUY1yStNMTeyR2qIpLUDGel1HjnI8Z9ptXYr8lQdfARdXS";
const API_SECRET = "grOS5oeHvdzQmDO1K6z1acJ6pkpeaGdmHTuGsmK3";

let token = "";

async function getAccessToken() {
  try {
    const res = await fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
    });

    if (!res.ok) {
      throw new Error(`Failed to get access token. Status: ${res.status}`);
    }

    const data = await res.json();
    token = data.access_token;

    fetchDogs();
  } catch (error) {
    console.error("Error in getAccessToken:", error);
  }
}

async function fetchDogs() {
  try {
    const res = await fetch(
      `https://api.petfinder.com/v2/animals?location=${zipcode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch dogs. Status: ${res.status}`);
    }

    const data = await res.json();
    displayDogs(data.animals);
  } catch (error) {
      
    // Display error to user, e.g., "Could not load dog listings."
  }
}

/**
 * Displays the fetched dog data on the webpage.
 * Each dog is rendered within a div with a 'dog-card' class for styling.
 * @param {Array} dogs - An array of dog objects from the Petfinder API.
 */
function displayDogs(dogs) {
  const container = document.getElementById("petfinder-dogs");
  if (!container) {
    console.error("Container element with ID 'petfinder-dogs' not found.");
    return;
  }
  container.innerHTML = ""; // Clear previous content

  dogs.forEach((dog) => {
    const div = document.createElement("div");
    // Assign a class for styling instead of inline styles
    div.classList.add("dog-card");

    const name = `<h3>${dog.name}</h3>`;
    // Check if photos exist before attempting to access the first one
    // Adjusted max-width for smaller images
    const photo =
      dog.photos && dog.photos.length > 0
        ? `<img src="${dog.photos[0].medium}" alt="${dog.name}" class="dog-photo" style="max-width: 150px; height: auto; border-radius: 8px;">`
        : `<img src="https://placehold.co/150x150/cccccc/ffffff?text=No+Image" alt="No image available" class="dog-photo" style="max-width: 150px; height: auto; border-radius: 8px;">`; // Placeholder image also adjusted

    // Truncate description if it exists, otherwise provide a default message
    const desc = `<p class="dog-description">${
      dog.description
        ? dog.description.substring(0, 200) + "..."
        : "No description available."
    }</p>`;

    const link = `<a href="${dog.url}" target="_blank" class="dog-profile-link">View Profile</a>`;

    div.innerHTML = `${name}${photo}${desc}${link}`;
    container.appendChild(div);
  });
}
async function searchForDog() {
  const input = document.getElementById("location-input");
  const zipcode = input.value;
  try {
    const res = await fetch(
      `https://api.petfinder.com/v2/animals?location=${zipcode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch dogs. Status: ${res.status}`);
    }

    const data = await res.json();
    displayDogs(data.animals);
  } catch (error) {
    console.error("Error in fetchdogs:", error);
  }
}
getAccessToken();
