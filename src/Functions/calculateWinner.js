"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const States_1 = require("src/Functions/States");
const pokemonAdvantage_1 = require("src/Data/pokemonAdvantage");
const CalculateWinner = () => {
    const { pokemon } = (0, States_1.useGlobalState)();
    //Icons that display what each user has chose
    const actions = {
        card0: [pokemon.pokemon0.type0],
        card1: [pokemon.pokemon1.type0],
        card2: [pokemon.pokemon2.type0],
    };
    const actionsdoubletype = {
        card0: [pokemon.pokemon0.type1],
        card1: [pokemon.pokemon1.type1],
        card2: [pokemon.pokemon2.type1],
    };
    function calculateWinner(action1, action2, check1 = 0, check2 = 0, check3 = 0, check4 = 0, check5 = 0, check6 = 0, score1 = 0, score2 = 0, score3 = 0) {
        //Compares the first item of each pokemon to see who has the item advantageData
        for (const item in pokemonAdvantage_1.advantageData) {
            if (item == actions[action1]) {
                Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                    if (key == actions[action2]) {
                        check1 = value;
                    }
                });
            }
        }
        ;
        for (const item in pokemonAdvantage_1.advantageData) {
            if (item == actions[action2]) {
                Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                    if (key == actions[action1]) {
                        check2 = value;
                    }
                });
            }
        }
        ;
        //Winning Score for the First types
        score1 = check1 + check2;
        //If the first types of each pokemon item adavantage is a draw then check to see if they have a secondary item then compare those
        if (check1 == check2) {
            check3 = '';
            if (check3 == '') {
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actionsdoubletype[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actionsdoubletype[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actionsdoubletype[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actionsdoubletype[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            if (check5 > check6) {
                return -1;
            }
            else if (check6 > check5) {
                return 1;
            }
            return 0;
        }
        //If the player wins check to see if the computers pokmon has a secondary item which has the item advantageData over the players item
        else if (check1 > check2) {
            if (pokemon.pokemon0.type1 != undefined) {
                actions[action2] = pokemon.pokemon0.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check3 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check4 = value;
                            }
                        });
                    }
                }
                ;
                //Check to see if both the player's and computer's pokemon have a secondary item and if so compare the overall pokemon item advantageData to one another
                actions[action1] = pokemon.pokemon0.type1;
                actions[action2] = pokemon.pokemon0.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            if (pokemon.pokemon1.type1 != undefined) {
                actions[action2] = pokemon.pokemon1.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check3 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check4 = value;
                            }
                        });
                    }
                }
                ;
                actions[action1] = pokemon.pokemon1.type1;
                actions[action2] = pokemon.pokemon1.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            if (pokemon.pokemon2.type1 != undefined) {
                actions[action2] = pokemon.pokemon2.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check3 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check4 = value;
                            }
                        });
                    }
                }
                ;
                actions[action1] = pokemon.pokemon2.type1;
                actions[action2] = pokemon.pokemon2.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            //Winning Score for the Computers secondary item vs the Players first item
            score2 = check3 + check4;
            //Winning Score for the Computers secondary item vs the Players Secondary item
            score3 = check5 + check6;
            //Compares all the item advantageData scores to see which Pokemon is stronger
            if (score1 > score2) {
                return 1;
            }
            if (score2 > score3) {
                return 1;
            }
            return -1;
        }
        //If the Computer wins check to see if the Players pokmon has a secondary item which has the item advantageData over the Computers item item
        else if (check2 > check1) {
            if (pokemon.pokemon0.type1 != undefined) {
                actions[action1] = pokemon.pokemon0.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check3 = value;
                            }
                        });
                    }
                }
                ;
                actions[action1] = pokemon.pokemon0.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check4 = value;
                            }
                        });
                    }
                }
                ;
                actions[action1] = pokemon.pokemon0.type1;
                actions[action2] = pokemon.pokemon0.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            if (pokemon.pokemon1.type1 != undefined) {
                actions[action1] = pokemon.pokemon1.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check3 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check4 = value;
                            }
                        });
                    }
                }
                ;
                actions[action1] = pokemon.pokemon1.type1;
                actions[action2] = pokemon.pokemon1.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            if (pokemon.pokemon2.type1 != undefined) {
                actions[action1] = pokemon.pokemon2.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check3 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check4 = value;
                            }
                        });
                    }
                }
                ;
                actions[action1] = pokemon.pokemon2.type1;
                actions[action2] = pokemon.pokemon2.type1;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action1]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action2]) {
                                check5 = value;
                            }
                        });
                    }
                }
                ;
                for (const item in pokemonAdvantage_1.advantageData) {
                    if (item == actions[action2]) {
                        Object.entries(pokemonAdvantage_1.advantageData[item]).forEach(([key, value]) => {
                            if (key == actions[action1]) {
                                check6 = value;
                            }
                        });
                    }
                }
                ;
            }
            //Winning Score for the PLayers secondary item vs the Computers first item
            score2 = check3 + check4;
            //Winning Score for the PLayers secondary item vs the Computers secondary item
            score3 = check5 + check6;
            //Compares all the item advantageData scores to see which Pokemon is stronger
            if (score1 > score2) {
                return -1;
            }
            else if (score2 > score3) {
                return -1;
            }
            return 1;
        }
        // This should never really happen
        return null;
    }
    return { calculateWinner, actions };
};
exports.default = CalculateWinner;
