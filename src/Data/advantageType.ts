//Type for actions 
export type actionsType = {
    [key: string]: any;
};

type advantageType = {
    normal: number,
    fire: number,
    water: number,
    grass: number,
    electric: number,
    ice: number,
    fighting: number,
    poison: number,
    ground: number,
    flying: number,
    psychic: number,
    bug: number,
    rock: number,
    ghost: number,
    dragon: number,
    dark: number,
    steel: number,
    fairy: number
};

// Defining a data type which is a record of number keys mapped to 'generateAdvantageData'.
export type advantageDataType = Record<string, advantageType>;

// Defining a function to generate a data object of 'generateAdvantageData'.
export function generateAdvantageData(
    normal: number,
    fire: number,
    water: number,
    grass: number,
    electric: number,
    ice: number,
    fighting: number,
    poison: number,
    ground: number,
    flying: number,
    psychic: number,
    bug: number,
    rock: number,
    ghost: number,
    dragon: number,
    dark: number,
    steel: number,
    fairy: number
): advantageType {
    // Returning an object with attributes corresponding to the provided parameters.
    return {
        normal,
        fire,
        water,
        grass,
        electric,
        ice,
        fighting,
        poison,
        ground,
        flying,
        psychic,
        bug,
        rock,
        ghost,
        dragon,
        dark,
        steel,
        fairy
    };
}

