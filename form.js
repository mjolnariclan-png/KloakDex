const pokedexData = {
  kanto: {
    26: { name: "raichu", type: "Electric", image: "images/Kanto/raichu.png" }
  },
  alola: {
    26: { name: "raichu", type: "Electric/Psychic", image: "images/Alola/raichu.png" }
  },
  galar: {
    77: { name: "ponyta", type: "Psychic", image: "images/Galar/ponyta.png" }
  }
};

function selectRegion(region) {
    document.getElementById('region-selection').classList.add('hidden');
    document.getElementById('pokedex-section').classList.remove('hidden');
    document.getElementById("region-title").textContent =
        region.charAt(0).toUpperCase() + region.slice(1);

    loadRegionDex(region);
}

function loadRegionDex(region) {
    const pokemonGrid = document.getElementById("pokedex");
    const pokedex = pokedexData[region];

    pokemonGrid.innerHTML = '';

    for (let number in pokedex) {
        const pokemon = pokedex[number];

        const key = `${region}-${number}`;
        const isCaught = localStorage.getItem(key) === 'true';

        const pokemonBox = document.createElement("div");
        pokemonBox.className = "pokemon-box";
        pokemonBox.innerHTML = `
            <div class="pokemon-number">#${number}</div>
            <div class="pokemon-name">${isCaught ? pokemon.name : '???'}</div>
            <div class="pokemon-status">${isCaught ? 'Caught ✔️' : 'Not Caught ❌'}</div>
            <img src="${isCaught ? pokemon.image : 'Placeholder.png'}">
        `;

        pokemonBox.onclick = () => {
            localStorage.setItem(key, !isCaught);
            loadRegionDex(region);
        };

        pokemonGrid.appendChild(pokemonBox);
    }
}

function goBack() {
    document.getElementById('pokedex-section').classList.add('hidden');
    document.getElementById('region-selection').classList.remove('hidden');
}
