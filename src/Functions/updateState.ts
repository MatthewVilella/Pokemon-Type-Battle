import { useGlobalState } from 'src/Functions/States';

const UpdateState = () => {
    const { setPokemon } = useGlobalState();

    const update = (
        type: string,
        name: string,
        type0: string,
        type1: string,
        sprite: string,
    ) => {
        // Depending on the 'type', update the corresponding attribute in the state.
        if (type == "card0") {
            setPokemon(prevSelection => ({
                ...prevSelection,
                pokemon0: {
                    ...prevSelection.pokemon0,
                    name: name,
                    type0: type0,
                    type1: type1,
                    sprite: sprite,
                },
            }));
        }

        if (type == "card1") {
            setPokemon(prevSelection => ({
                ...prevSelection,
                pokemon1: {
                    ...prevSelection.pokemon1,
                    name: name,
                    type0: type0,
                    type1: type1,
                    sprite: sprite,
                },
            }));
        }

        if (type == "card2") {
            setPokemon(prevSelection => ({
                ...prevSelection,
                pokemon2: {
                    ...prevSelection.pokemon2,
                    name: name,
                    type0: type0,
                    type1: type1,
                    sprite: sprite,
                },
            }));
        }
    };

    return { update };
};

export default UpdateState;