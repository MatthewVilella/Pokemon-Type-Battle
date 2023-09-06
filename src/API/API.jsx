"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateState_1 = __importDefault(require("src/Functions/updateState"));
const randomPokemon_1 = __importDefault(require("src/Functions/randomPokemon"));
const pokemonId_1 = require("src/Data/pokemonId");
// interface ApiFunctions {
//     fetchPokemon: (cardNumber: number, type: string) => Promise<void>;
// }
const Api = () => {
    const { update } = (0, updateState_1.default)();
    const { getRandomPokemon } = (0, randomPokemon_1.default)();
    const fetchPokemon = async (cardNumber, type) => {
        let randomPokemonCard = getRandomPokemon(pokemonId_1.drawCardOrder[cardNumber]);
        let randomElementCard = pokemonId_1.drawCardOrder[cardNumber][randomPokemonCard];
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomElementCard}`);
            const data = await response.json();
            const { types, sprites } = data;
            // Extract the type names from the types array
            const typeNames = types.map((type) => type.type.name);
            //Updates states
            update(type, data.name, typeNames[0], typeNames[1], sprites.front_default);
        }
        catch (error) {
            console.error(error);
        }
    };
    return { fetchPokemon };
};
exports.default = Api;
