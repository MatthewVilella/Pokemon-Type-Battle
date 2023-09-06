"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const States_1 = require("src/Functions/States");
const Card0_1 = require("src/Components/Card0");
const Card1_1 = require("src/Components/Card1");
const Card2_1 = require("src/Components/Card2");
const Score_1 = require("src/Components/Score");
const Banner_1 = require("src/Components/Banner");
const gameMechanics_1 = __importDefault(require("src/Functions/gameMechanics"));
const showWinner_1 = __importDefault(require("src/Components/showWinner"));
function App() {
    const { onActionSelected } = (0, gameMechanics_1.default)();
    return (<div className="center">
            <Banner_1.Banner />
            <Score_1.Score />
            <div className="button-container">
                <Card0_1.Card0 action="card0" onActionSelected={onActionSelected}/>
                <Card1_1.Card1 action="card1" onActionSelected={onActionSelected}/>
                <Card2_1.Card2 action="card2" onActionSelected={onActionSelected}/>
            </div>
            <showWinner_1.default />
        </div>);
}
function MainApp() {
    return (<States_1.GlobalStateProvider>
            <App />
        </States_1.GlobalStateProvider>);
}
exports.default = MainApp;
