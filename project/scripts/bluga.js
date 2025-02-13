

// currentyear
const yearSpan = document.querySelector("#currentyear");
const today = new Date();
const currentYear = today.getFullYear();
yearSpan.textContent = currentYear;


// lastModified
const dateSpan = document.querySelector("#lastModified");
const now = new Date();
const lastModified = document.lastModified
const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
const formattedDateTime = `${formattedDate} ${formattedTime}`;

dateSpan.textContent = `Last Modified: ${formattedDateTime}`;


// hamburger button
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});


const lat = 60.715378;
const lon = -151.373016;
const apiKey = 'b88b467467c5c93a73cadc6fb251da33';

// Create the URL to fetch the current weather data in Fahrenheit
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// Create the URL to fetch the 3-day forecast data in Fahrenheit
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// Fetch current weather data
fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
    // Process current weather data
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const iconCode = data.weather[0].icon;

    // Construct the image URL for the weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    // Output the current weather information and icon
    console.log(`Weather: ${weatherDescription}`);
    console.log(`Temperature: ${temperature}°F`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Wind Speed: ${windSpeed} m/s`);

    // Display current weather information on the webpage
    document.getElementById("weatherDescription").textContent = `Weather: ${weatherDescription}`;
    document.getElementById("temperature").textContent = `Temperature: ${temperature}°F`;
    document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    document.getElementById("windSpeed").textContent = `Wind Speed: ${windSpeed} m/s`;

    // Display the current weather icon
    document.getElementById("weatherIcon").src = iconUrl;
  })
  .catch(error => {
    console.error("Error fetching current weather data:", error);
  });

// Fetch 3-day forecast data
fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = ''; // Clear any previous forecast

    // Loop through the forecast data and display the first 3 days
    for (let i = 0; i < 3; i++) {
      const dayData = data.list[i * 8]; // Each day has 8 data points (3 hours apart)
      const date = new Date(dayData.dt * 1000);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const forecastTemp = dayData.main.temp;
      const forecastDescription = dayData.weather[0].description;
      const forecastIconCode = dayData.weather[0].icon;
      const forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIconCode}.png`;

      // Create the forecast HTML
      const forecastHTML = `
        <div class="forecast-card">
          <h4>${dayName}</h4>
          <img src="${forecastIconUrl}" alt="${forecastDescription}">
          <p>${forecastDescription}</p>
          <p>Temp: ${forecastTemp}°F</p>
        </div>
      `;

      // Append the forecast to the container
      forecastContainer.innerHTML += forecastHTML;
    }
  })
  .catch(error => {
    console.error("Error fetching forecast data:", error);
  });




// form

// Event listener for form submission
document.getElementById("sponsorForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting normally

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const tier = document.getElementById("tier").value; // Get selected tier

  // Get current date and time for timestamp
  const timestamp = new Date().toLocaleString();

  // Construct the URL with query parameters
  const thankYouUrl = `thank-you.html?fullName=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&tier=${encodeURIComponent(tier)}&timestamp=${encodeURIComponent(timestamp)}`;

  // Redirect to the thank-you page with the query parameters
  window.location.href = thankYouUrl;
});






