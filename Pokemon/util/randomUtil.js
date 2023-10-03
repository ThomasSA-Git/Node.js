export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomPokemonId = randomIntFromInterval(1, 151);