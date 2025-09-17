async function searchPokemon() {
  const nameOrId = document.getElementById("searchInput").value.toLowerCase();
  if (!nameOrId) return;

  try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const data = await res.json();

  
    await fetch(data.species.url);

  
    const container = document.getElementById("pokemonContainer");
    container.innerHTML = "";


    const heightMeters = data.height / 10;
    const weightKg = data.weight / 10;

  
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <div class="info">
        <h3>${data.name.toUpperCase()}</h3>
        <p><b>Peso:</b> ${weightKg} kg</p>
        <p><b>Tamaño:</b> ${heightMeters} m</p>
        <p><b>Tipo:</b> ${data.types.map(t => t.type.name).join(", ")}</p>
      </div>
    `;

    container.appendChild(card);

  } catch (error) {
    alert("Pokémon no encontrado.");
  }
}

async function loadPokemonList() {
}

loadPokemonList();
