"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStateProvider = exports.useGlobalState = void 0;
const react_1 = __importStar(require("react"));
// Creating the global state context.
const GlobalStateContext = (0, react_1.createContext)(undefined);
const useGlobalState = () => {
    const context = (0, react_1.useContext)(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
exports.useGlobalState = useGlobalState;
const GlobalStateProvider = ({ children }) => {
    const [playerAction, setPlayerAction] = (0, react_1.useState)("");
    const [computerAction, setComputerAction] = (0, react_1.useState)("");
    const [playerScore, setPlayerScore] = (0, react_1.useState)(0);
    const [computerScore, setComputerScore] = (0, react_1.useState)(0);
    const [winner, setWinner] = (0, react_1.useState)(0);
    const [cardRotation, setCardRotation] = (0, react_1.useState)(3);
    const [pokemon, setPokemon] = (0, react_1.useState)({
        pokemon0: {
            cardType: "card0",
            name: "",
            type0: "",
            type1: "",
            sprite: "",
        },
        pokemon1: {
            cardType: "card1",
            name: "",
            type0: "",
            type1: "",
            sprite: "",
        },
        pokemon2: {
            cardType: "card2",
            name: "",
            type0: "",
            type1: "",
            sprite: "",
        },
    });
    const [card, setCard] = (0, react_1.useState)({
        card0: {
            cardType: "card0",
            number: 0,
            FirstTypeColor: "",
            FirstTypeIcon: "",
            FirstTypeBorder: "",
            SecondTypeColor: "",
            SecondTypeIcon: "",
            SecondTypeBorder: "",
        },
        card1: {
            cardType: "card1",
            number: 1,
            FirstTypeColor: "",
            FirstTypeIcon: "",
            FirstTypeBorder: "",
            SecondTypeColor: "",
            SecondTypeIcon: "",
            SecondTypeBorder: "",
        },
        card2: {
            cardType: "card2",
            number: 2,
            FirstTypeColor: "",
            FirstTypeIcon: "",
            FirstTypeBorder: "",
            SecondTypeColor: "",
            SecondTypeIcon: "",
            SecondTypeBorder: "",
        },
    });
    const contextValue = {
        card, setCard,
        playerAction, setPlayerAction,
        computerAction, setComputerAction,
        playerScore, setPlayerScore,
        computerScore, setComputerScore,
        winner, setWinner,
        cardRotation, setCardRotation,
        pokemon, setPokemon,
    };
    // Providing the context value to the components within the provider.
    return (<GlobalStateContext.Provider value={contextValue}>
            {children}
        </GlobalStateContext.Provider>);
};
exports.GlobalStateProvider = GlobalStateProvider;
