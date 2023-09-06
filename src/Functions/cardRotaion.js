"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const States_1 = require("src/Functions/States");
const gameMechanics_1 = __importDefault(require("src/Functions/gameMechanics"));
const react_1 = require("react");
const API_1 = __importDefault(require("src/API/API"));
const CardRotation = () => {
    const { cardRotation, setCardRotation, card } = (0, States_1.useGlobalState)();
    const { fetchPokemon, } = (0, API_1.default)();
    const { onActionSelected } = (0, gameMechanics_1.default)();
    //Draws next card for player
    const drawCard = (action) => {
        if (cardRotation == 17) {
            setCardRotation(0);
        }
        onActionSelected(action);
        setCardRotation(prevrotaion => prevrotaion + 1);
        //Changes card used to New card after 1 second
        setTimeout(function () {
            fetchPokemon(cardRotation, action);
        }, 1000);
    };
    (0, react_1.useEffect)(() => {
        fetchPokemon(card.card0.number, "card0");
        fetchPokemon(card.card1.number, "card1");
        fetchPokemon(card.card2.number, "card2");
    }, []);
    return { drawCard };
};
exports.default = CardRotation;
