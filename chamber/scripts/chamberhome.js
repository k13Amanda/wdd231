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




document.addEventListener('DOMContentLoaded', async () => {
    
    try {
        const response = await fetch('data/members.json');
        const organizations = await response.json();

        function getRandomOrganizations(orgs) {
            const filteredOrgs = orgs.filter(org => org.membershipLevel === 2 || org.membershipLevel === 3);
            const randomOrgs = [];
            while (randomOrgs.length < 3) {
                const randomIndex = Math.floor(Math.random() * filteredOrgs.length);
                randomOrgs.push(filteredOrgs[randomIndex]);
                filteredOrgs.splice(randomIndex, 1);
            }
            return randomOrgs;
        }

        const selectedOrgs = getRandomOrganizations(organizations);
        const buscards = document.getElementById('buscards');
        selectedOrgs.forEach(org => {
            const companySection = document.createElement('section');
            companySection.className = 'card';
            companySection.innerHTML = `
                <h3 class="name">${org.name}</h3>
                <hr>
                <img class="busimg" src="images/${org.image}" alt="${org.name} Logo">
                <p class="email"><strong>Email:</strong> <a href="mailto:${org.email}">${org.email}</a></p>
                <p class="phone"><strong>Phone:</strong> ${org.phone}</p>
                <p class="url"><strong>URL:</strong> <a href="${org.website}" target="_blank">${org.website}</a></p>
                <p class="address"><strong>Address:</strong> ${org.address}</p>
                <p class="level"><strong>Member Level:</strong> ${org.membershipLevel}</p>
            `;
            buscards.appendChild(companySection);
        });
    } catch (error) {
        console.error('Error fetching organizations:', error);
    }
});




// 02f154a08ba74fabee63f6aa1cde9c7e

const myTown = document.getElementById('town');
const myDesc = document.querySelector('#desc');
const myTemp = document.querySelector('#temp');
const myGraphic = document.querySelector('#graphic');

const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');

const myKey = "02f154a08ba74fabee63f6aa1cde9c7e";
const myLat = "27.049954761550023";
const myLong ="-82.23954575506782";

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello');
    myTown.innerHTML = data.name;
    myDesc.innerHTML = data.weather[0].description;
    myTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

function displayForecast(data) {
    const forecast = data.list.filter(item => item.dt_txt.endsWith("12:00:00")).slice(0, 3); // Fetch noon data for 3 days
    const days = [day1, day2, day3];
    forecast.forEach((dayData, index) => {
        const date = new Date(dayData.dt_txt).toLocaleDateString();
        const temp = `${dayData.main.temp}&deg;F`;
        const description = dayData.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`;

        days[index].innerHTML = `
            <p>${date}</p>
            <img src="${icon}" alt="${description}">
            <p>${temp}</p>
            <p>${description}</p>
        `;
    });
}

apiFetch();

