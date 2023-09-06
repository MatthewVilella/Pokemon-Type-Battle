"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
const react_1 = __importDefault(require("react"));
const States_1 = require("src/Functions/States");
const Player_1 = require("src/Components/Player");
const Score = () => {
    const { playerScore, computerScore, playerAction, computerAction } = (0, States_1.useGlobalState)();
    return (<div className="container">
            <Player_1.Player name="Player" score={playerScore} action={playerAction}/>
            <Player_1.Player name="Computer" score={computerScore} action={computerAction}/>
        </div>);
};
exports.Score = Score;
