"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advantageData = void 0;
const advantageType_1 = require("src/Data/advantageType");
// Defining advantage data using the 'generateAdvantageData' function.
// Each entry represents a pokemon type advantage with its damage multiplyer to other types.
exports.advantageData = {
    "normal": (0, advantageType_1.generateAdvantageData)(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1),
    "fire": (0, advantageType_1.generateAdvantageData)(1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1),
    "water": (0, advantageType_1.generateAdvantageData)(1, 2, 0.5, 0.5, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1),
    "electric": (0, advantageType_1.generateAdvantageData)(1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1),
    "grass": (0, advantageType_1.generateAdvantageData)(1, 0.5, 2, 0.5, 1, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1),
    "ice": (0, advantageType_1.generateAdvantageData)(1, 0.5, 0.5, 2, 1, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1),
    "fighting": (0, advantageType_1.generateAdvantageData)(2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5),
    "poison": (0, advantageType_1.generateAdvantageData)(1, 1, 1, 2, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2),
    "ground": (0, advantageType_1.generateAdvantageData)(1, 2, 1, 0.5, 2, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1),
    "flying": (0, advantageType_1.generateAdvantageData)(1, 1, 1, 2, 0.5, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1),
    "psychic": (0, advantageType_1.generateAdvantageData)(1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1),
    "bug": (0, advantageType_1.generateAdvantageData)(1, 0.5, 1, 2, 1, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5),
    "rock": (0, advantageType_1.generateAdvantageData)(1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1),
    "ghost": (0, advantageType_1.generateAdvantageData)(0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1),
    "dragon": (0, advantageType_1.generateAdvantageData)(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0),
    "dark": (0, advantageType_1.generateAdvantageData)(1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5),
    "steel": (0, advantageType_1.generateAdvantageData)(1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2),
    "fairy": (0, advantageType_1.generateAdvantageData)(1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1),
};
