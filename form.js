const pokedexData = {
  kanto: {
    26: { name: "raichu", type: "Electric", image: "images/kanto/raichu.png" }
  },
  alola: {
    26: { name: "raichu", type: "Electric/Psychic", image: "images/alola/raichu.png" }
  }
};



function selectRegion(region) {
    document.getElementById('region-selection').classList.add('hidden');
    document.getElementById('pokedex-section').classList.remove('hidden');
    loadRegionDex(region);
}

function loadRegionDex(region) {
    const pokemonGrid = document.getElementById("pokedex");
    const normalizedRegion = region.toLowerCase();
    const pokedex = pokedexData[normalizedRegion];

    if (!pokedex) {
        console.warn("No data found for:", region);
        pokemonGrid.innerHTML = `<p>No data for ${region}</p>`;
        return;
    }

    pokemonGrid.innerHTML = '';

    for (let number in pokedex) {
        const pokemon = pokedex[number];
        if (!pokemon) continue;

        const storageKey = `${normalizedRegion}-${number}`;
        const isCaught = localStorage.getItem(storageKey) === 'true';

        const pokemonBox = document.createElement("div");
        pokemonBox.className = "pokemon-box";
        pokemonBox.innerHTML = `
            <div class="pokemon-number">#${number}</div>
            <div class="pokemon-name">
                ${isCaught ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : '???'}
            </div>
            <div class="pokemon-status">
                ${isCaught ? 'Caught ✔️' : 'Not Caught ❌'}
            </div>
            ${isCaught ? `<div class="pokemon-type">Type: ${pokemon.type}</div>` : ''}
            <img src="${isCaught ? pokemon.image : 'Placeholder.png'}"
                 alt="${isCaught ? pokemon.name : '???'}"
                 class="pokemon-image"/>
        `;

        pokemonBox.onclick = () => toggleCaughtStatus(normalizedRegion, number);

        pokemonGrid.appendChild(pokemonBox);
    }
}

function toggleCaughtStatus(region, number) {
    const key = `${region}-${number}`;
    const isCaught = localStorage.getItem(key) === 'true';
    localStorage.setItem(key, !isCaught);
    loadRegionDex(region);
}

function goBack() {
    document.getElementById('pokedex-section').classList.add('hidden');
    document.getElementById('region-selection').classList.remove('hidden');
}
