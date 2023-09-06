import UpdateState from 'src/Functions/updateState';
import RandomPokemon from 'src/Functions/randomPokemon';
import { drawCardOrder } from 'src/Data/pokemonId'

// interface ApiFunctions {
//     fetchPokemon: (cardNumber: number, type: string) => Promise<void>;
// }

const Api = () => {
    const { update } = UpdateState();
    const { getRandomPokemon } = RandomPokemon()

    const fetchPokemon = async (cardNumber: number, type: string) => {
        let randomPokemonCard = getRandomPokemon(drawCardOrder[cardNumber]);
        let randomElementCard = drawCardOrder[cardNumber][randomPokemonCard];

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomElementCard}`);
            const data = await response.json();
            const { types, sprites } = data;

            // Extract the type names from the types array
            const typeNames = types.map((type: any) => type.type.name);

            //Updates states
            update(
                type,
                data.name,
                typeNames[0],
                typeNames[1],
                sprites.front_default,
            );

        } catch (error) {
            console.error(error);
        }
    };
    return { fetchPokemon };
};

export default Api;
