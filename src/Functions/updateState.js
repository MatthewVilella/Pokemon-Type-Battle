"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const States_1 = require("src/Functions/States");
const UpdateState = () => {
    const { setPokemon } = (0, States_1.useGlobalState)();
    const update = (type, name, type0, type1, sprite) => {
        // Depending on the 'type', update the corresponding attribute in the state.
        if (type == "card0") {
            setPokemon(prevSelection => (Object.assign(Object.assign({}, prevSelection), { pokemon0: Object.assign(Object.assign({}, prevSelection.pokemon0), { name: name, type0: type0, type1: type1, sprite: sprite }) })));
        }
        if (type == "card1") {
            setPokemon(prevSelection => (Object.assign(Object.assign({}, prevSelection), { pokemon1: Object.assign(Object.assign({}, prevSelection.pokemon1), { name: name, type0: type0, type1: type1, sprite: sprite }) })));
        }
        if (type == "card2") {
            setPokemon(prevSelection => (Object.assign(Object.assign({}, prevSelection), { pokemon2: Object.assign(Object.assign({}, prevSelection.pokemon2), { name: name, type0: type0, type1: type1, sprite: sprite }) })));
        }
    };
    return { update };
};
exports.default = UpdateState;
