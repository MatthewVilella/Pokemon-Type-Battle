import React from 'react';
import { useGlobalState } from 'src/Functions/States';
import CardRotation from 'src/Functions/cardRotaion';
import CardDesign from 'src/Functions/cardDesign'

interface Card2Props {
    action: string;
    onActionSelected: (selectedAction: string) => void;
}

export const Card2: React.FC<Card2Props> = ({ action, onActionSelected }) => {
    const { pokemon, card } = useGlobalState();
    const { drawCard } = CardRotation()
    const { createCardDesign } = CardDesign();

    const handleClick = (action: string) => {
        onActionSelected(action);
        drawCard(action);
    };

    createCardDesign(pokemon.pokemon2, card.card2)

    return (
        <div>
            <button style={{ border: "none", background: "transparent" }} onClick={() => handleClick("card2")} >
                {pokemon.pokemon2.type0 !== undefined && pokemon.pokemon2.type1 !== undefined ? (
                    <div
                        className="card"
                        style={{
                            marginTop: 5,
                            background: `linear-gradient(to right, ${card.card2.FirstTypeColor} 50%, ${card.card2.SecondTypeColor} 50%)`,
                            width: "4in",
                            height: "7in",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            borderLeft: `4px solid ${card.card2.FirstTypeBorder}`,
                            borderBottom: `4px solid ${card.card2.FirstTypeBorder}`,
                            borderRight: `4px solid ${card.card2.SecondTypeBorder}`,
                            borderTop: `4px solid ${card.card2.SecondTypeBorder}`,
                        }}
                    >
                        <div
                            className="title"
                            style={{
                                height: "20%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {pokemon.pokemon2.name}
                        </div>
                        <div className="pokemon" style={{ height: "100%" }}>
                            <img
                                src={pokemon.pokemon2.sprite}
                                alt={pokemon.pokemon2.name}
                                style={{
                                    marginTop: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div
                            className="pokemonType"
                            style={{
                                height: "70%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                style={{ width: "2in", height: "3in", objectFit: "contain" }}
                                src={`/PokemonTypes/${card.card2.FirstTypeIcon}-removebg-preview.png`}
                            />
                            <img
                                style={{ width: "2in", height: "3in", objectFit: "contain", paddingLeft: 5, }}
                                src={`/PokemonTypes/${card.card2.SecondTypeIcon}-removebg-preview.png`}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        className="card"
                        style={{
                            marginTop: 5,
                            background: `linear-gradient(to right, ${card.card2.FirstTypeColor} 50%, ${card.card2.FirstTypeColor} 50%)`,
                            width: "4in",
                            height: "7in",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            borderLeft: `4px solid ${card.card2.FirstTypeBorder}`,
                            borderBottom: `4px solid ${card.card2.FirstTypeBorder}`,
                            borderRight: `4px solid ${card.card2.FirstTypeBorder}`,
                            borderTop: `4px solid ${card.card2.FirstTypeBorder}`,
                        }}
                    >
                        <div
                            className="title"
                            style={{
                                height: "20%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {pokemon.pokemon2.name}
                        </div>
                        <div className="pokemon" style={{ height: "100%" }}>
                            <img
                                src={pokemon.pokemon2.sprite}
                                alt={pokemon.pokemon2.name}
                                style={{
                                    marginTop: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div
                            className="pokemonType"
                            style={{
                                height: "70%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                style={{ width: "2in", height: "3in", objectFit: "contain" }}
                                src={`/PokemonTypes/${card.card2.FirstTypeIcon}-removebg-preview.png`}
                            />
                        </div>
                    </div>
                )}
            </button>
        </div>
    );
};