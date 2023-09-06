"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const react_1 = __importDefault(require("react"));
const States_1 = require("src/Functions/States");
const Banner = () => {
    const { playerScore, computerScore } = (0, States_1.useGlobalState)();
    return (<div className="center">
            <img src="/PokemonTypes/pokeball-removebg-preview.png" alt="Left Image" className="image-left"/>
            {computerScore === 18 ? <h1>Computer Wins!</h1> : (playerScore === 18 ? <h1>Player Wins!</h1> : <h1>Pokemon Type Battle</h1>)}
            <img src="/PokemonTypes/pokeball-removebg-preview.png" alt="Right Image" className="image-right"/>
        </div>);
};
exports.Banner = Banner;
