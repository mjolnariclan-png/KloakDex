// Pokémon data for each game
const pokedexData = {
    red: {
    1: { name: "bulbasaur", type: "Grass/Poison", image:"images/RBY Dex/bulbasaur.png" },
},
    blue: {
    1: { name: "bulbasaur", type: "Grass/Poison", image:"images/RBY Dex/bulbasaur.png" },
},
    yellow: {
    1: { name: "bulbasaur", type: "Grass/Poison", image:"images/RBY Dex/bulbasaur.png" },
},
    gold: {
    1: { name: "Chikorita", type: "Grass", image:"images/GSC Dex/chikorita.png" },
},
    silver: {
    1: { name: "Chikorita", type: "Grass", image:"images/GSC Dex/chikorita.png" },
},
    crystal: {
    1: { name: "Chikorita", type: "Grass", image:"images/GSC Dex/chikorita.png" },
},
    ruby: {
    1: { name: "Treecko", type: "Grass", image:"images/RSE Dex/treecko.png" },
},
    sapphire: {
    1: { name: "Treecko", type: "Grass", image:"images/RSE Dex/treecko.png" },
},
    emerald: {
    1: { name: "Treecko", type: "Grass", image:"images/RSE Dex/treecko.png" },
},
    firered: {
    1: { name: "bulbasaur", type: "Grass/Poison", image:"images/FRLG Dex/bulbasaur.png" },
},
    leafgreen: {
    1: { name: "bulbasaur", type: "Grass/Poison", image:"images/FRLG Dex/bulbasaur.png" },
},
    diamond:{
    1: { name: "Turtwig", type: "Grass", image:"images/DP Dex/turtwig.png" },
},
    pearl:{
    1: { name: "Turtwig", type: "Grass", image:"images/DP Dex/turtwig.png" },
},
    platinum:{
    1: { name: "Turtwig", type: "Grass", image:"images/DP Dex/turtwig.png" },
},
    heartgold: {
    1: { name: "Chikorita", type: "Grass", image:"images/HGSS Dex/chikorita.png" },
},
    soulsilver: {
    1: { name: "Chikorita", type: "Grass", image:"images/HGSS Dex/chikorita.png" },
},
    black: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/BW/victini.png" },
},
    white: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/BW/victini.png" },
},
    black2: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    white2: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    x: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    y: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    omegaruby: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    alphasapphire: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    pogo: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    sun: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    moon: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    ultrasun: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    ultramoon: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    letsgopikachu: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    letsgoeevee: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    sword: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    shield: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    brilliantdiamond: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    shiningpearl: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    arceus: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},
    scarlet: {
    906: { name: "Sprigatito", type: "Grass", image:"images/Normal/sprigatito.png" },
},
    violet: {
    906: { name: "Sprigatito", type: "Grass", image:"images/Normal/sprigatito.png" },
},
    za: {
    0: { name: "victini", type: "Psychic/Fire", image: "images/B2W2/victini.png" },
},




    // Add other games here
};

function selectGame(game) {
    document.getElementById('game-selection').classList.add('hidden');
    document.getElementById('pokedex-section').classList.remove('hidden');
    loadPokedex(game);
}

function loadPokedex(game) {
    const pokemonGrid = document.getElementById("pokedex");

    // Normalize game key to lowercase (for consistency)
    const normalizedGame = game.toLowerCase();
    const pokedex = pokedexData[normalizedGame];

    if (!pokedex) {
        console.warn("No data found for:", game);
        pokemonGrid.innerHTML = `<p>No data for ${game}</p>`;
        return;
    }

    // Clear existing grid
    pokemonGrid.innerHTML = '';

    // Loop through Pokémon
    for (let number in pokedex) {
        const pokemon = pokedex[number];
        if (!pokemon) continue;

        // Check if caught
        const isCaught = localStorage.getItem(`${normalizedGame}-${number}`) === 'true';

        // Create Pokémon box
        const pokemonBox = document.createElement("div");
        pokemonBox.className = "pokemon-box";
        pokemonBox.innerHTML = `
            <div class="pokemon-number">#${number}</div>
            <div class="pokemon-name">${isCaught ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : '???'}</div>
            <div class="pokemon-status">${isCaught ? 'Caught ✔️' : 'Not Caught ❌'}</div>
            ${isCaught 
                ? `<div class="pokemon-type">Type: ${pokemon.type}</div>` 
                : ''}
            <img src="${isCaught ? pokemon.image : 'Placeholder.png'}" alt="${isCaught ? pokemon.name : '???'}" class="pokemon-image"/>
        `;

        // Toggle caught status on click
        pokemonBox.onclick = () => toggleCaughtStatus(normalizedGame, number);

        // Add to grid
        pokemonGrid.appendChild(pokemonBox);
    }
}

function toggleCaughtStatus(game, number) {
    const isCaught = localStorage.getItem(`${game}-${number}`) === 'true';
    localStorage.setItem(`${game}-${number}`, !isCaught);

    // Reload grid
    loadPokedex(game);
}

function GameSelect() {
    document.getElementById('pokedex-section').classList.add('hidden');
    document.getElementById('game-selection').classList.remove('hidden');
}

function goBack() {
    document.getElementById('game-selection').classList.remove('hidden');
    document.getElementById('dex-buttons').classList.remove('hidden');
}

