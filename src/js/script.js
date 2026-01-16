// 1. Create Data (Array of Objects)
const selections = [
    {
        name: "Farmingdale State College",
        location: "Farmingdale, NY",
        program: "Applied Psychology",
        website: "https://www.farmingdale.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
        rank: 1
    },
    {
        name: "University at Albany",
        location: "Albany, NY",
        program: "Computer Science",
        website: "https://www.albany.edu",
        image: "https://images.unsplash.com/photo-1523050335392-9bef867a4975?auto=format&fit=crop&q=80&w=800",
        rank: 2
    },
    {
        name: "New York City College of Technology (City Tech)",
        location: "Brooklyn, NY",
        program: "Mechanical Engineering",
        website: "https://www.citytech.cuny.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
        rank: 3
    }
];

// 2. Select the container
const container = document.querySelector('#card-container');

// 3. Advanced Challenge: Use an iterator to display data
function displaySelections() {
    // Clear container just in case
    container.innerHTML = '';

    selections.forEach(item => {
        // Create HTML template string
        const cardHTML = `
            <div class="card">
                <img src="${item.image}" alt="${item.name}" class="card-image">
                <div class="card-content">
                    <span class="rank">Rank #${item.rank}</span>
                    <h2 class="card-title">${item.name}</h2>
                    <div class="location">📍 ${item.location}</div>
                    <p class="program"><strong>Program:</strong> ${item.program}</p>
                    <a href="${item.website}" target="_blank" class="card-link">Visit Website</a>
                </div>
            </div>
        `;
        
        // Insert data into HTML
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Run the function to display cards
displaySelections();
