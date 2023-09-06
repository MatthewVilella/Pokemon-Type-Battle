"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const designData_1 = require("src/Data/designData");
const CardDesign = () => {
    const createCardDesign = (pokemon, card) => {
        for (const item in designData_1.designData) {
            const data = designData_1.designData[item];
            if (item == pokemon.type0) {
                card.FirstTypeColor = data.color;
                card.FirstTypeBorder = data.borderColor;
                card.FirstTypeIcon = data.icon;
            }
            else if (item == pokemon.type1) {
                card.SecondTypeColor = data.color;
                card.SecondTypeBorder = data.borderColor;
                card.SecondTypeIcon = data.icon;
            }
        }
    };
    return { createCardDesign };
};
exports.default = CardDesign;
