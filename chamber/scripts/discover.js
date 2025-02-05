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


    // Function to check and display the message based on the visit time
    function displayVisitMessage() {
        // Get the current date in milliseconds
        const currentTime = Date.now();
    
        // Retrieve the last visit time from localStorage
        const lastVisit = localStorage.getItem('lastVisit');
        
        // If no last visit is found, it means it's the user's first visit
        if (!lastVisit) {
            localStorage.setItem('lastVisit', currentTime);
            document.getElementById('sidebar').innerText = "Welcome! Let us know if you have any questions.";
            return;
        }
    
        // Calculate the time difference in milliseconds
        const timeDiff = currentTime - lastVisit;
    
        // Calculate the number of days between visits
        const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 3600 * 24));
    
        // If the visit was within the last 24 hours
        if (daysSinceLastVisit < 1) {
            document.getElementById('sidebar').innerText = "Back so soon! Awesome!";
        } else {
            const message = daysSinceLastVisit === 1 
                ? `You last visited 1 day ago.` 
                : `You last visited ${daysSinceLastVisit} days ago.`;
            document.getElementById('sidebar').innerText = message;
        }
    
        // Update the last visit time in localStorage
        localStorage.setItem('lastVisit', currentTime);
    }
    
    // Call the function to display the message
    displayVisitMessage();




    
    window.onload = function() {
        const cardContainer = document.getElementById("discover-card-container");
        const modals = document.querySelectorAll('.modal');  // Get all modals
        const closeBtns = document.querySelectorAll('.close-btn');  // Get all close buttons
    
        // Function to close all modals
        function closeModal(modal) {
            modal.style.display = "none";
        }
    
        const attractions = [
            {
                "title": "Myakka State Forest",
                "short_description": "Myakka State Forest is a hidden gem in North Port, offering visitors a variety of outdoor activities. It’s one of the only state forests located almost entirely within city limits.",
                "long_description": "North Port’s unique natural wonders, the Myakka State Forest is one of the country’s only state forests that’s encompassed almost entirely within city limits. Explore the 8,500-acre flatwood and longleaf pine forest via its 40 miles of hiking, biking, and equestrian trails. Camping, fishing, and small-game hunting are also common outdoor activities.",
                "address": "2555 South River Road Englewood, FL 34223",
                "image": "images/myakka-forest.webp"
            },
            {
                "title": "Charter A Fishing Boat",
                "short_description": "Experience the thrill of tarpon fishing in North Port with a guided fishing charter. A perfect day out on the water for fishing enthusiasts.",
                "long_description": "North Port is also known for its excellent tarpon fishing. Let Captain Chris Conte of Cash Money Charters take you out for a fun-filled day of fishing on the Myakka River. There’s something to catch in every season, but if it’s tarpon you hope to hook, consider visiting in May, June, or July.",
                "address": "456 Elm St, Sarasota, Florida",
                "image": "images/charter-boats.webp"
            },
            {
                "title": "Soak In Mineral Springs",
                "short_description": "Relax in the state’s only natural warm spring, perfect for a peaceful dip. It’s a unique experience with high mineral concentrations in the water.",
                "long_description": "North Port is home to the state’s only natural warm spring. The spring at Warm Mineral Springs Park stays at a balmy 85 degrees year-round and is thought to have one of the highest mineral concentrations of any natural spring in the U.S., making it the perfect location to take a dip. With nine million gallons of freshwater that replenishes itself every two hours, you’ll have a one-of-a-kind experience at this giant natural swimming pool.",
                "address": "12200 San Servando Ave, North Port, FL 34287",
                "image": "images/warm-mineral-springs.webp"
            },
            {
                "title": "Paddle In North Port",
                "short_description": "Paddle across serene waters in North Port with options for kayaking, canoeing, and paddleboarding. A peaceful adventure surrounded by nature.",
                "long_description": "There’s absolutely nothing more serene than an early morning paddle in North Port. Start on the Myakka River, the Myakkahatchee Creek, or on a freshwater canal and prepare to be transported by the stillness of the water, the natural beauty that surrounds you, and the unmatched peace of the experience. There are plenty of places to rent a kayak, canoe, or paddle board, and still more places to put in. Glass Bottom Rentals offers guided kayak and paddleboard tour launching from McKibben Park. If you’ve got your own watercraft, you can put it at Marina Park and create a custom adventure following Sarasota County’s Paddling Blueways Guide. Along your route, you might spot manatees, mangroves, diving birds, and even alligators.",
                "address": "5810 Gasparilla Road, Placida, FL 33946",
                "image": "images/kayak.webp"
            },
            {
                "title": "Make A Splash",
                "short_description": "Take the family to the North Port Aquatic Center to enjoy fun water slides, pools, and a lazy river. Perfect for a day of family-friendly activities.",
                "long_description": "Take the kids to cool off at the North Port Aquatic Center, which features a zero-entry pool, multiple water slides, and the Relaxahatchee Lazy River. The snack bar offers hot dogs, ice cream treats, and other basics to tide you over until it's time to head out to dinner.",
                "address": "6205 West Price Blvd., North Port, FL 34291",
                "image": "images/pool.webp"
            },
            {
                "title": "Myakka River State Park",
                "short_description": "Explore one of Florida’s oldest and largest state parks, filled with wetlands, swamps, and unique wildlife. An excellent destination for nature lovers.",
                "long_description": "One of the state’s largest and oldest parks is ready to be discovered on the north side of the city. Myakka River State Park has a wealth of natural environments like wetlands, marshes, and cypress swamps. One feature you have to track down is the Deep Hole, a karst sinkhole up to 100 feet deep. With campgrounds and an acclaimed trail system, the park is a hotspot for amateur bird enthusiasts, who come to catch a glimpse of some of the seldom seen species that call the area home. One of these is the roseate spoonbill, and I had the privilege of seeing this magnificent and reclusive species foraging on the muddy banks of the river. The park opened in 1942, following almost a decade of work by the Civilian Conservation Corps, leaving it with beautiful parkitecture still in use today.",
                "address": "13208 State Road 72 Sarasota FL 34241",
                "image": "images/myakka-river.webp"
            },
            {
                "title": "CoolToday Park",
                "short_description": "Visit CoolToday Park to catch a baseball game or enjoy other exciting events. Home to the Atlanta Braves’ spring training, it’s an iconic venue in North Port.",
                "long_description": "In 2019 North Port became the new spring training home for Major League Baseball’s Atlanta Braves. The crowning glory of this $140 million complex is the CoolToday Park, seating 8,000 people. I’ve watched a game here, and the best feature for me was the concourse walkway, which runs along the entire grandstand, and is something I normally associate with larger stadiums. It means you can hang out a little, and chat with a few friends without missing any of the action. During these warm-up games, taking place late February to late March, you’ll see some of baseball’s biggest names in action, and will get a glimpse of the next generation of stars. Later in the year, CoolToday Park is the venue for North Port’s Freedom Festival, with live music and fireworks on July 4.",
                "address": "18800 West Villages Parkway, Venice, FL 34293",
                "image": "images/cooltoday-park.webp"
            },
            {
                "title": "Deer Creek Prairie Preserve",
                "short_description": "Discover Deer Creek Prairie Preserve, a natural haven for wildlife and outdoor enthusiasts. Explore miles of trails in this peaceful, remote area.",
                "long_description": "If you want to spend more time in the wilderness around North Port then look no further than Deer Prairie Creek Preserve. Almost 6,500 acres, this property encompasses a tributary of the Myakka River, and can be accessed from the edge of town at 10201 South Tamiami Trail (southern entrance). For solitude, the Deer Prairie Creek Preserve is up there with the Myakka River State Park, with more than 60 miles of primitive, natural surface trails. The preserve’s habitats range from wetlands to Florida dry prairie, oak hammock and scrubby flatwoods. There’s a diversity of wildlife to match, including bobcats, river otters and deer. One species to look out for is the Florida scrub jay, which has been native to the region for more than two million years, but is now listed as ‘vulnerable’. ",
                "address": "10201 South Tamiami Trail North Port Florida",
                "image": "images/nature-preserve.webp"
            }
        ];
          
    
        // Generate cards based on the JSON data
        attractions.forEach((attraction, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
    
            // Add specific grid class for each card based on index
            card.classList.add(`discover-card${index + 1}`);
    
            // Set up the card HTML structure
            card.innerHTML = `
                <h2>${attraction.title}</h2>
                <figure>
                    <img src="${attraction.image}" alt="${attraction.title}" width="200" loading="lazy">
                </figure>
                <address>${attraction.address}</address>
                <p>${attraction.short_description}</p>
                <button class="learn-more">Learn More</button>
            `;
    
            // Append the card to the container
            cardContainer.appendChild(card);
    
            // Add event listener for the "Learn More" button to show the modal
            card.querySelector('.learn-more').addEventListener('click', function() {
                const modal = document.getElementById("modal");
                const modalTitle = document.getElementById("modal-title");
                const modalDescription = document.getElementById("modal-description");
    
                // Set modal content based on the attraction
                modalTitle.textContent = attraction.title;
                modalDescription.textContent = attraction.long_description;
    
                modal.style.display = "block";  // Show the modal
            });
        });
    
        // Close modals when the user clicks on the close button
        closeBtns.forEach(function(button) {
            button.addEventListener('click', function() {
                const modalId = button.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                closeModal(modal);  // Close the corresponding modal
            });
        });
    
        // When the user clicks anywhere outside the modal, close it
        window.addEventListener('click', function(event) {
            modals.forEach(function(modal) {
                if (event.target === modal) {
                    closeModal(modal);  // Close the modal if clicked outside
                }
            });
        });
    };
    
    
