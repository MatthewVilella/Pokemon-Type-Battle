"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const States_1 = require("src/Functions/States");
const ShowWinner = () => {
    const { winner } = (0, States_1.useGlobalState)();
    let text = "";
    if (winner == 0) {
        text = "It's a Tie";
    }
    else if (winner == 1) {
        text = "You Lose!";
    }
    else if (winner == -1) {
        text = "You Win!";
    }
    return (<h2>{text}</h2>);
};
exports.default = ShowWinner;
