"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const States_1 = require("src/Functions/States");
const calculateWinner_1 = __importDefault(require("src/Functions/calculateWinner"));
const GameMechanics = () => {
    const { setPlayerAction, setComputerAction, playerScore, setPlayerScore, computerScore, setComputerScore, setWinner, pokemon } = (0, States_1.useGlobalState)();
    const { calculateWinner, actions } = (0, calculateWinner_1.default)();
    //Computer picks random Card to play
    function randomAction() {
        const keys = Object.keys(actions);
        const index = Math.floor(Math.random() * keys.length);
        return keys[index];
    }
    //Distributes points based on who won the round
    const onActionSelected = (selectedAction) => {
        const newComputerAction = randomAction();
        setPlayerAction(selectedAction);
        setComputerAction(newComputerAction);
        const newWinner = calculateWinner(selectedAction, newComputerAction);
        setWinner(newWinner);
        if (newWinner === -1) {
            setPlayerScore(playerScore + 1);
        }
        else if (newWinner === 1) {
            setComputerScore(computerScore + 1);
        }
        if (playerScore == 18 || computerScore == 18) {
            setPlayerScore(0);
            setComputerScore(0);
        }
    };
    //Diplays what Pokemon each user chose
    function ActionIcon(_a) {
        var { action } = _a, props = __rest(_a, ["action"]);
        const icons = {
            card0: pokemon.pokemon0.sprite,
            card1: pokemon.pokemon1.sprite,
            card2: pokemon.pokemon2.sprite,
        };
        const Icon = typeof icons[action] === 'string' ? 'img' : icons[action];
        return typeof icons[action] === 'string' ? (<Icon src={icons[action]} alt={action} {...props}/>) : (<Icon {...props}/>);
    }
    return { randomAction, onActionSelected, ActionIcon };
};
exports.default = GameMechanics;
