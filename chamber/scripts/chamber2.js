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
        const gridViewBtn = document.getElementById('grid-view-btn');
        const listViewBtn = document.getElementById('list-view-btn');
        const container = document.body;
    

        container.classList.add('grid-view');
    
        gridViewBtn.addEventListener('click', () => {
            container.classList.add('grid-view');
            container.classList.remove('list-view');
        });
    
        listViewBtn.addEventListener('click', () => {
            container.classList.add('list-view');
            container.classList.remove('grid-view');
        });
    
        try {
            const response = await fetch('data/members.json');
            const companies = await response.json();
    
            const buscards = document.getElementById('buscards');
            companies.forEach(company => {
                const companySection = document.createElement('section');
                companySection.className = 'card';
                companySection.innerHTML = `
                    <h3 class= "name">${company.name}</h3>
                    <img class="busimg" src="images/${company.image}" alt="${company.name} Logo">
                    <p class="email"><strong>Email:</strong> <a href="mailto:${company.email}">${company.email}</a></p>
                    <p class="phone"><strong>Phone:</strong> ${company.phone}</p>
                    <p class="url"><strong>URL:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                    <p class="address"><strong>Address:</strong> ${company.address}</p>
                `;
                buscards.appendChild(companySection);
            });
        } catch (error) {
            console.error('Error fetching company data:', error);
        }
    });
    



    