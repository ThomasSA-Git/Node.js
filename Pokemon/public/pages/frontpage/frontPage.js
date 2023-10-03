function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomPokemonId = randomIntFromInterval(1, 151);

    // fetch laver et http netværkskald til nedenstående url.
    // så kommer der et response som er et bytestream
    fetch( `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}` )
    .then(((response) => {
        if(!response.ok) {
           throw new Error("Error getting a pokemon");
        }
        return response.json();
    }))
    .then((result) => {
        const nameHeader = document.getElementById("pokemon-name");
        const capPokemonName = result.name[0].toUpperCase() + result.name.slice(1).toLowerCase();
        nameHeader.innerText = capPokemonName;
        //bruger innertext i stedet for innerhtml for at undgå crosssitescripting.
        // det er i princippet at der bliver injected ukendt/fremmed/skadelig kode ind i dit program/website.

        const imageWrapperDiv = document.getElementById("image-wrapper");
        imageWrapperDiv.innerHTML = `
            <img src="${result.sprites.other.home.front_default}">
        `;
    });