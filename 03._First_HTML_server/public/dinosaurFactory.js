
const extinctDinosaurs = ["🦕", "🦖", "🦴", "🍗"];

function getExtinctDinosaurs(){
    return extinctDinosaurs;
}

function addExtinctDinosaur(extinctDinosaur){
    extinctDinosaurs.push(extinctDinosaur);
}

export default {
    getExtinctDinosaurs,
    addExtinctDinosaur
}