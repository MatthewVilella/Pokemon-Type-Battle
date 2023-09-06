const RandomPokemon = () => {

    function getRandomPokemon(array: string[]) {
        let randomPokemonCard0 = Math.floor(Math.random() * array.length);
        return randomPokemonCard0;
    }

    return { getRandomPokemon };
};

export default RandomPokemon;