"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomPokemon = () => {
    function getRandomPokemon(array) {
        let randomPokemonCard0 = Math.floor(Math.random() * array.length);
        return randomPokemonCard0;
    }
    return { getRandomPokemon };
};
exports.default = RandomPokemon;
