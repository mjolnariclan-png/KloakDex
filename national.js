// Load the full National Dex
function loadNationalDex() {
    const pokemonGrid = document.getElementById("pokedex");

    // Get the National Dex object
    const pokedex = pokedexData["national"]; // your 1025-pokemon data

    if (!pokedex) {
        console.warn("No National Dex data found");
        pokemonGrid.innerHTML = `<p>No data found</p>`;
        return;
    }

    // Clear grid
    pokemonGrid.innerHTML = '';

    // Loop through Pokémon
    for (let number in pokedex) {
        const pokemon = pokedex[number];
        if (!pokemon) continue;

        // Create Pokémon box
        const pokemonBox = document.createElement("div");
        pokemonBox.className = "pokemon-box";
        pokemonBox.innerHTML = `
            <div class="pokemon-number">#${number}</div>
            <div class="pokemon-name">${capitalize(pokemon.name)}</div>
            <div class="pokemon-type">Type: ${pokemon.type}</div>
            <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image"/>
        `;

        // Add to grid
        pokemonGrid.appendChild(pokemonBox);
    }
}

// Capitalize function
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Called when National Dex button is clicked
function showNationalDex() {
    document.getElementById('game-selection').classList.add('hidden');
    document.getElementById('pokedex-section').classList.remove('hidden');

    loadNationalDex();
}

// Optional: "Back" button
function goBack() {
    document.getElementById('pokedex-section').classList.add('hidden');
    document.getElementById('game-selection').classList.remove('hidden');
}
