// task create a fetch to /battlepokemon

fetch("/battlepokemon")
.then(((response) => {
    if(!response.ok){
        throw new Error("error")
    }
    return response.json();
}))
.then((result) => {
    const nameHeader = document.getElementById("pokemon-name");
    nameHeader.innerText = result.data.name;
    
    const strengthHeader = document.getElementById("pokemon-strength");
    strengthHeader.innerText = "Remaining strength: " + result.data.strength;

    const imageWrapperDiv = document.getElementById("image-wrapper");
    imageWrapperDiv.innerHTML = `
        <img id="pokemon-image" src="${result.data.imageURL}">`;
});