"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const react_1 = __importDefault(require("react"));
const gameMechanics_1 = __importDefault(require("src/Functions/gameMechanics"));
const Player = ({ name = "Player", score = 0, action = "card0" }) => {
    const { ActionIcon } = (0, gameMechanics_1.default)();
    return (<div className="player">
            <div className="score">{`${name}: ${score}`}</div>
            <div className="action">
                {action && <ActionIcon action={action} style={{ width: '350px', height: '250px' }}/>}
            </div>
        </div>);
};
exports.Player = Player;
