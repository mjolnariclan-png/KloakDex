const pokedexData = {
  kanto: {
    19: { name: "rattata", type: "Dark/Normal", image: "images/Kanto/rattata.png"},
    20: { name: "raticate", type: "Dark/Normal", image: "images/Kanto/raticate.png"},
    26: { name: "raichu", type: "Electric", image: "images/Kanto/raichu.png" },
    27: { name: "sandshrew", type: "Ice/Steel", image: "images/Kanto/sandshrew.png"},
    28: { name: "sandslash", type: "Ice/Steel", image: "images/Kanto/sandslash.png"},
    37: { name: "vulpix", type: "Fire", image: "images/Kanto/vulpix.png"},
    38: { name: "ninetails", type: "Fire", image: "images/Kanto/ninetails.png"},
    50: { name: "diglett", type: "Ground", image: "images/Kanto/diglett.png"},
    51: { name: "dugtrio", type: "Ground", image: "images/Kanto/dugtrio.png"},
    52: { name: "meowth", type: "Normal", image: "images/Kanto/meowth.png"},
    53: { name: "persian", type: "Normal", image: "images/Kanto/persian.png"},
    58: { name: "growlithe", type: "Fire", image: "images/Kanto/growlithe.png"},
    59: { name: "arcanine", type: "Fire", image: "images/Kanto/arcanine.png"},
    72: { name: "tentacool", type: "Water/Poison", image: "images/Kanto/tentacool.png"},
    73: { name: "tentacruel", type: "Water/Poison", image: "images/Kanto/tentacruel.png"},
    74: { name: "geodude", type: "Rock/Ground", image: "images/Kanto/geodude.png"},
    75: { name: "graveler", type: "Rock/Ground", image: "images/Kanto/graveler.png"},
    76: { name: "golem", type: "Rock/Ground", image: "images/Kanto/golem.png"},
    77: { name: "ponyta", type: "Fire", image: "images/Kanto/ponyta.png"},
    78: { name: "rapidash", type: "Fire", image: "images/Kanto/rapidash.png"},
    79: { name: "slowpoke", type: "Water/Psychic", image: "images/Kanto/slowpoke.png"},
    80: { name: "slowbro", type: "Water/Psychic", image: "images/Kanto/slowbro.png"},
    83: { name: "farfetchd", type: "Normal/Flying", image: "images/Kanto/farfetch'd.png"},
    88: { name: "grimer", type: "Poison", image: "images/Kanto/grimer.png"},
    89: { name: "muk", type: "Poison", image: "images/Kanto/muk.png"},
    100: { name: "voltorb", type: "electric", image: "images/Kanto/voltorb.png"},
    101: { name: "electrode", type: "Electric", image: "images/Kanto/electrode.png"},
    103: { name: "exeggutor", type: "Grass/Psychic", image: "images/Kanto/exeggutor.png"},
    105: { name: "marowak", type: "ground", image: "images/Kanto/marowak.png"},
    110: { name: "weezing", type: "Poison", image: "images/Kanto/weezing.png"},
    122: { name: "mr.mime", type: "Psychic/Fairy", image: "images/Kanto/mr.mime.png"},
    128: { name: "tauros", type: "Normal", image: "images/Kanto/tauros.png"},
    144: { name: "articuno", type: "Ice/Flying", image: "images/Kanto/articuno.png"},
    145: { name: "zapdos", type: "Electric/Flying", image: "images/Kanto/zapdos.png"},
    146: { name: "moltres", type: "Fire/Flying", image: "images/Kanto/moltres.png"}

  },
  alola: {
    19: { name: "rattata", type: "Dark/Normal", image: "images/Alola/rattata.png"},
    20: { name: "raticate", type: "Dark/Normal", image: "images/Alola/raticate.png"},
    26: { name: "raichu", type: "Electric/Psychic", image: "images/Alola/raichu.png" },
    27: { name: "sandshrew", type: "Ice/Steel", image: "images/Alola/sandshrew.png"},
    28: { name: "sandslash", type: "Ice/Steel", image: "images/Alola/sandslash.png"},
    37: { name: "vulpix", type: "Ice", image: "images/Alola/vulpix.png"},
    38: { name: "ninetales", type: "Ice/Fairy", image: "images/Alola/ninetales.png"},
    50: { name: "diglett", type: "Ground/Steel", image: "images/Alola/diglett.png"},
    51: { name: "dugtrio", type: "Ground/Steel", image: "images/Alola/dugtrio.png"},
    52: { name: "meowth", type: "Dark", image: "images/Alola/meowth.png"},
    53: { name: "persian", type: "Dark", image: "images/Alola/persian.png"},
    74: { name: "geodude", type: "Rock/Electric", image: "images/Alola/geodude.png"},
    75: { name: "graveler", type: "Rock/Electric", image: "images/Alola/graveler.png"},
    76: { name: "golem", type: "Rock/Electric", image: "images/Alola/golem.png"},
    88: { name: "grimer", type: "Poison/Dark", image: "images/Alola/grimer.png"},
    89: { name: "muk", type: "Poison/Dark", image: "images/Alola/muk.png"},
    103: { name: "exeggutor", type: "Grass/Dragon", image: "images/Alola/exeggutor.png"},
    105: { name: "marowak", type: "Fire/Ghost", image: "images/Alola/marowak.png"},
    724: { name: "decidueye", type: "Grass/Ghost", image: "images/Alola/decidueye.png"},

  },
  galar: {
    52: { name: "meowth", type: "Steel", image: "images/Galar/meowth.png"},
    77: { name: "ponyta", type: "Psychic", image: "images/Galar/ponyta.png" },
    78: { name: "rapidash", type: "Psychic/Fairy", image: "images/Galar/rapidash.png"},
    79: { name: "slowpoke", type: "Psychic", image: "images/Galar/slowpoke.png"},
    80: { name: "slowbro", type: "Poison/Psychic", image: "images/Galar/slowbro.png"},
    83: { name: "farfetchd", type: "Fighting", image: "images/Galar/farfetch'd.png"},
    110: { name: "weezing", type: "Poison/Fairy", image: "images/Galar/weezing.png"},
    122: { name: "mr.mime", type: "Ice/Psychic", image: "images/Galar/mr.mime.png"},
    144: { name: "articuno", type: "Psychic/Flying", image: "images/Galar/articuno.png"},
    145: { name: "zapdos", type: "Fighting/Flying", image: "images/Galar/zapdos.png"},
    146: { name: "moltres", type: "Dark/Flying", image: "images/Galar/moltres.png"},
    199: { name: "slowking", type: "Poison/Psychic", image: "images/Galar/slowking.png"},
    222: { name: "corsola", type: "Ghost", image: "images/Galar/corsola.png"},
    263: { name: "zigzagoon", type: "Dark/Normal", image: "images/Galar/zigzagoon.png"},
    264: { name: "linoone", type: "Dark/Normal", image: "images/Galar/linoone.png"},
    554: { name: "darumaka", type: "Ice", image: "images/Galar/darumaka.png"},
    5551: { name: "darmanitan", type: "Ice", image: "images/Galar/darmanitan.png"},
    5552: { name: "darmanitan-zen", type: "Ice/Fire", image: "images/Galar/darmanitan-zen.png"},
    562: { name: "yamask", type: "Ground/Ghost", image: "images/Galar/yamask.png"},
    618: { name: "stunfisk", type: "Ground/Steel", image: "images/Galar/stunfisk.png"},
    862: { name: "obstagoon", type: "Dark/Normal", image: "images/Galar/obstagoon.png"},
    863: { name: "perrserker", type: "Steel", image: "images/Galar/perrserker.png"},
    864: { name: "cursola", type: "Ghost", image: "images/Galar/cursola.png"},
    865: { name: "sirfetch'd", type: "Fighting", image: "images/Galar/sirfetch'd.png"},
    866: { name: "mr.rime", type: "Ice/Psychic", image: "images/Galar/mr.rime.png"},
    867: { name: "runerigus", type: "Ground/Ghost", image: "images/Galar/runerigus.png"},
  },
  hisui: {
    58: { name: "growlithe", type: "Fire/Rock", image: "images/Hisui/growlithe.png"},
    59: { name: "arcanine", type: "Fire/Rock", image: "images/Hisui/arcanine.png" },
    100: { name: "voltorb", type: "Electric/Grass", image: "images/Hisui/voltorb.png"},
    101: { name: "electrode", type: "Electric/Grass", image: "images/Hisui/electrode.png"},
    157: { name: "typhlosion", type: "Fire/Ghost", image: "images/Hisui/typhlosion.png"},
    211: { name: "qwilfish", type: "Dark/Poison", image: "images/Hisui/qwilfish.png"},
    215: { name: "sneasel", type: "Fighting/Poison", image: "images/Hisui/sneasel.png"},
    503: { name: "samurott", type: "Water/Dark", image: "images/Hisui/samurott.png"},
    549: { name: "lilligant", type: "Grass/Fighting", image: "images/Hisui/lilligant.png"},
    570: { name: "zorua", type: "Normal/Ghost", image: "images/Hisui/zorua.png"},
    571: { name: "zoroark", type: "Normal/Ghost", image: "images/Hisui/zoroark.png"},
    628: { name: "braviary", type: "Psychic/Flying", image: "images/Hisui/braviary.png"},
    705: { name: "sliggoo", type: "Steel/Dragon", image: "images/Hisui/sliggoo.png"},
    706: { name: "goodra", type: "Steel/Dragon", image: "images/Hisui/goodra.png"},
    713: { name: "avalugg", type: "Ice/Rock", image: "images/Hisui/avalugg.png"},
    724: { name: "decidueye", type: "Grass/Fightning", image: "images/Hisui/decidueye.png"},
    903: { name: "sneasler", type: "Fighting/Poison", image: "images/Hisui/sneasler.png"},
    904: { name: "overqwil", type: "Dark/Poison", image: "images/Hisui/overqwil.png"},
  },
  paldea: {
    1281: { name: "tauros-aqua", type: "Fighting/Water", image: "images/Paldea/tauros-aqua.png"},
    1282: { name: "tauros-blaze", type: "Fighting/Fire", image: "images/Paldea/tauros-blaze.png"},
    1283: { name: "tauros-combat", type: "Fighting", image: "images/Paldea/tauros-combat.png"},
    194: { name: "wooper", type: "Poison/Ground", image: "images/Paldea/wooper.png"},
    980: { name: "clodsire", type: "Poison/Ground", image: "images/Paldea/clodsire.png"},
  },
  johto: {
    157: { name: "typhlosion", type: "Fire", image: "images/Johto/typhlosion.png"},
    194: { name: "wooper", type: "Water/Ground", image: "images/Johto/wooper.png"},
    195: { name: "quagsire", type: "Water/Ground", image: "images/Johto/quagsire.png"},
    199: { name: "slowking", type: "Water/Psychic", image: "images/Johto/slowking.png"},
    211: { name: "qwilfish", type: "Water/Poison", image: "images/Johto/qwilfish.png"},
    215: { name: "sneasel", type: "Dark/Ice", image: "images/Johto/sneasel.png"},
    222: { name: "corsola", type: "Water/Rock", image: "images/Johto/corsola.png"},
  },
  hoenn: {
    263: { name: "zigzagoon", type: "Normal", image: "images/Hoenn/zigzagoon.png"},
    264: { name: "linoone", type: "Normal", image: "images/Hoenn/linoone.png"},
  },
  kalos: {
    705: { name: "sliggoo", type: "Dragon", image: "images/Kalos/sliggoo.png"},
    706: { name: "goodra", type: "Dragon", image: "images/Kalos/goodra.png"},
    713: { name: "avalugg", type: "Ice", image: "images/Kalos/avalugg.png"},
  },
  sinnoh: {
    461: { name: "weavile", type: "Dark/Ice", image: "images/Sinnoh/weavile.png"},
  },
  unova: {
    503: { name: "samurott", type: "Water", image: "images/Unova/samurott.png"},
    549: { name: "lilligant", type: "Grass", image: "images/Unova/lilligant.png"},
    554: { name: "darumaka", type: "Fire", image: "images/Unova/darumaka.png"},
    5551: { name: "darmanitan", type: "Fire", image: "images/Unova/darmanitan.png"},
    5552: { name: "darmanitan-zen", type: "Fire/Psychic", image: "images/Unova/darmanitan-zen.png"},
    562: { name: "yamask", type: "Ghost", image: "images/Unova/yamask.png"},
    563: { name: "cofagrigus", type: "Ghost", image: "images/Unova/cofagrigus.png"},
    570: { name: "zorua", type: "Dark", image: "images/Unova/zorua.png"},
    571: { name: "zoroark", type: "Dark", image: "images/Unova/zoroark.png"},
    618: { name: "stunfisk", type: "Ground/Electric", image: "images/Unova/stunfisk.png"},
    628: { name: "braviary", type: "Normal/Flying", image: "images/Unova/braviary.png"},

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
