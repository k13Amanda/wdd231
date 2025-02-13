

// Discover js 
const whales = [
    {"NAME": "Maple", "SEX": "F", "FACILITY": "Georgia Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Nunavik", "SEX": "M", "FACILITY": "Georgia Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Qinu", "SEX": "F", "FACILITY": "Georgia Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Shila", "SEX": "F", "FACILITY": "Georgia Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Whisper", "SEX": "F", "FACILITY": "Georgia Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Acadia", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Andre", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Barents sea, Russia"},
    {"NAME": "Aurora (MLC)", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Bertie", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Calypso", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Caspian", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Cleopatra", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Cyprus", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Eve", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Frankie", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Gemini", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Gimli", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Isis", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Jelly Bean", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Jubilee", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Kelowna", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Lillooet", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Meeka", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Mira", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Nahanni", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Neva", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Odin", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Orion", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Osiris", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Peekachu", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Qila", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Rain", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Ruby (MLC)", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Secord", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Sierra", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Skyla", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Tank", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Tofino", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Tuk", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Xavier II", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Xena", "SEX": "F", "FACILITY": "Marineland Canada", "ORIGIN": "Okhotsk sea, Russia"},
    {"NAME": "Yukon", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Zephyr", "SEX": "M", "FACILITY": "Marineland Canada", "ORIGIN": "Captive-born"},
    {"NAME": "Jetta", "SEX": "F", "FACILITY": "Mystic Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Juno", "SEX": "M", "FACILITY": "Mystic Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Kela", "SEX": "F", "FACILITY": "Mystic Aquarium", "ORIGIN": "Hudson bay, Canada"},
    {"NAME": "Kharabali", "SEX": "F", "FACILITY": "Mystic Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Natasha", "SEX": "F", "FACILITY": "Mystic Aquarium", "ORIGIN": "Hudson bay, Canada"},
    {"NAME": "Sahara", "SEX": "F", "FACILITY": "Mystic Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Samson", "SEX": "M", "FACILITY": "SeaWorld Orlando", "ORIGIN": "Captive-born"},
    {"NAME": "Kenai", "SEX": "M", "FACILITY": "SeaWorld Orlando", "ORIGIN": "Captive-born"},
    {"NAME": "Atla", "SEX": "F", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Captive-born"},
    {"NAME": "Crissy", "SEX": "F", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Hudson bay, Canada"},
    {"NAME": "Innik", "SEX": "M", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Captive-born"},
    {"NAME": "Luna", "SEX": "F", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Captive-born"},
    {"NAME": "Martha", "SEX": "F", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Hudson bay, Canada"},
    {"NAME": "Naluark", "SEX": "M", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Hudson bay, Canada"},
    {"NAME": "Pearl", "SEX": "F", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Captive-born"},
    {"NAME": "Tulok", "SEX": "M", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Captive-born"},
    {"NAME": "Tyonek", "SEX": "M", "FACILITY": "SeaWorld San Antonio", "ORIGIN": "Captive-born"},
    {"NAME": "Allua", "SEX": "F", "FACILITY": "SeaWorld San Diego", "ORIGIN": "Hudson bay, Canada"},
    {"NAME": "Klondike", "SEX": "M", "FACILITY": "SeaWorld San Diego", "ORIGIN": "Captive-born"},
    {"NAME": "Oliver", "SEX": "M", "FACILITY": "SeaWorld San Diego", "ORIGIN": "Captive-born"},
    {"NAME": "Annik", "SEX": "M", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Atlas", "SEX": "M", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Aurek", "SEX": "M", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Bella", "SEX": "F", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Beethoven", "SEX": "M", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Kayavak", "SEX": "F", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Kimalu", "SEX": "F", "FACILITY": "Shedd Aquarium", "ORIGIN": "Captive-born"},
    {"NAME": "Naya", "SEX": "F", "FACILITY": "Shedd Aquarium", "ORIGIN": "Hudson bay, Canada"}];
  
  // Function to generate whale cards
  function generateWhaleCards(whaleArray) {
    const container = document.getElementById("whale-cards-container");
    container.innerHTML = '';  // Clear previous cards

    // Loop through each whale in the array
    whaleArray.forEach(whale => {
        const card = document.createElement("div");
        card.classList.add("whale-card");

        // Create and append whale name
        const name = document.createElement("h2");
        name.textContent = `Name: ${whale.NAME}`;
        card.appendChild(name);

        // Create and append whale sex
        const sex = document.createElement("p");
        sex.textContent = `Sex: ${whale.SEX}`;
        card.appendChild(sex);

        // Create and append whale facility
        const facility = document.createElement("p");
        facility.textContent = `Facility: ${whale.FACILITY}`;
        card.appendChild(facility);

        // Create and append whale origin
        const origin = document.createElement("p");
        origin.textContent = `Origin: ${whale.ORIGIN}`;
        card.appendChild(origin);

        // Append card to container
        container.appendChild(card);
    });
}

// Function to sort whales by facility
function sortWhalesByFacility() {
    const selectedFacility = document.getElementById("facility-select").value;
    let sortedWhales;

    if (selectedFacility === "") {
        // If no selection, show all whales
        sortedWhales = whales;
    } else {
        // Sort by the selected facility
        sortedWhales = whales.filter(whale => whale.FACILITY === selectedFacility);
    }

    // Generate cards for the sorted whales
    generateWhaleCards(sortedWhales);
}

// Event listener for dropdown change
document.getElementById("facility-select").addEventListener("change", sortWhalesByFacility);

// Initial call to render all cards
window.onload = () => generateWhaleCards(whales);
  
  