async function fetchData() {
    try {
        const monsterName = document.getElementById("monster-info").value.toLowerCase();
        const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monsterName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        
        // Populate HTML elements with monster data
        document.getElementById("monster-name").textContent = data.name;
        document.getElementById("monster-size").textContent = data.size;
        document.getElementById("monster-type").textContent = data.type;
        document.getElementById("monster-alignment").textContent = data.alignment;
        document.getElementById("monster-armor-class").textContent = data.armor_class[0].value;
        // Update more fields as needed
        
        // Display monster image
        const monsterImg = `https://www.dnd5eapi.co${data.image}`;
        document.getElementById("monster-image").src = monsterImg;
        document.getElementById("monster-image").style.display = "block";
    } catch (error) {
        console.error(error);
    }
}

// Event listener for search button
document.getElementById("search-button").addEventListener("click", fetchData);
