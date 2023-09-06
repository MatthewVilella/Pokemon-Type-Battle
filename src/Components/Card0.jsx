"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card0 = void 0;
const react_1 = __importDefault(require("react"));
const States_1 = require("src/Functions/States");
const cardRotaion_1 = __importDefault(require("src/Functions/cardRotaion"));
const cardDesign_1 = __importDefault(require("src/Functions/cardDesign"));
const Card0 = ({ action, onActionSelected }) => {
    const { card, pokemon } = (0, States_1.useGlobalState)();
    const { drawCard } = (0, cardRotaion_1.default)();
    const { createCardDesign } = (0, cardDesign_1.default)();
    const handleClick = (action) => {
        onActionSelected(action);
        drawCard(action);
    };
    createCardDesign(pokemon.pokemon0, card.card0);
    return (<div>
            <button style={{ border: "none", background: "transparent" }} onClick={() => handleClick("card0")}>
                {pokemon.pokemon0.type0 !== undefined && pokemon.pokemon0.type1 !== undefined ? (<div className="card" style={{
                marginTop: 5,
                background: `linear-gradient(to right, ${card.card0.FirstTypeColor} 50%, ${card.card0.SecondTypeColor} 50%)`,
                width: "4in",
                height: "7in",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                borderLeft: `4px solid ${card.card0.FirstTypeBorder}`,
                borderBottom: `4px solid ${card.card0.FirstTypeBorder}`,
                borderRight: `4px solid ${card.card0.SecondTypeBorder}`,
                borderTop: `4px solid ${card.card0.SecondTypeBorder}`,
            }}>
                        <div className="title" style={{
                height: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                            {pokemon.pokemon0.name}
                        </div>
                        <div className="pokemon" style={{ height: "100%" }}>
                            <img src={pokemon.pokemon0.sprite} alt={pokemon.pokemon0.name} style={{
                marginTop: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
            }}/>
                        </div>
                        <div className="pokemonType" style={{
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                            <img style={{ width: "2in", height: "3in", objectFit: "contain" }} src={`/PokemonTypes/${card.card0.FirstTypeIcon}-removebg-preview.png`}/>
                            <img style={{ width: "2in", height: "3in", objectFit: "contain", paddingLeft: 5, }} src={`/PokemonTypes/${card.card0.SecondTypeIcon}-removebg-preview.png`}/>
                        </div>
                    </div>) : (<div className="card" style={{
                marginTop: 5,
                background: `linear-gradient(to right, ${card.card0.FirstTypeColor} 50%, ${card.card0.FirstTypeColor} 50%)`,
                width: "4in",
                height: "7in",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                borderLeft: `4px solid ${card.card0.FirstTypeBorder}`,
                borderBottom: `4px solid ${card.card0.FirstTypeBorder}`,
                borderRight: `4px solid ${card.card0.FirstTypeBorder}`,
                borderTop: `4px solid ${card.card0.FirstTypeBorder}`,
            }}>
                        <div className="title" style={{
                height: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                            {pokemon.pokemon0.name}
                        </div>
                        <div className="pokemon" style={{ height: "100%" }}>
                            <img src={pokemon.pokemon0.sprite} alt={pokemon.pokemon0.name} style={{
                marginTop: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
            }}/>
                        </div>
                        <div className="pokemonType" style={{
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                            <img style={{ width: "2in", height: "3in", objectFit: "contain" }} src={`/PokemonTypes/${card.card0.FirstTypeIcon}-removebg-preview.png`}/>
                        </div>
                    </div>)}
            </button>
        </div>);
};
exports.Card0 = Card0;
