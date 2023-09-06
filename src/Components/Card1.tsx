import React from 'react';
import { useGlobalState } from 'src/Functions/States';
import CardRotation from 'src/Functions/cardRotaion';
import CardDesign from 'src/Functions/cardDesign'

interface Card1Props {
    action: string;
    onActionSelected: (selectedAction: string) => void;
}

export const Card1: React.FC<Card1Props> = ({ action, onActionSelected }) => {
    const { drawCard } = CardRotation()
    const { pokemon, card } = useGlobalState();
    const { createCardDesign } = CardDesign();

    const handleClick = (action: string) => {
        onActionSelected(action);
        drawCard(action);
    };
    createCardDesign(pokemon.pokemon1, card.card1)
    return (
        <div >

            <button style={{ border: "none", background: "transparent" }} onClick={() => handleClick("card1")}>
                {pokemon.pokemon1.type0 !== undefined && pokemon.pokemon1.type1 !== undefined ? (
                    <div
                        className="card"
                        style={{
                            marginTop: 5,
                            background: `linear-gradient(to right, ${card.card1.FirstTypeColor} 50%, ${card.card1.SecondTypeColor} 50%)`,
                            width: "4in",
                            height: "7in",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            borderLeft: `4px solid ${card.card1.FirstTypeBorder}`,
                            borderBottom: `4px solid ${card.card1.FirstTypeBorder}`,
                            borderRight: `4px solid ${card.card1.SecondTypeBorder}`,
                            borderTop: `4px solid ${card.card1.SecondTypeBorder}`,
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
                            {pokemon.pokemon1.name}
                        </div>
                        <div className="pokemon" style={{ height: "100%" }}>
                            <img
                                src={pokemon.pokemon1.sprite}
                                alt={pokemon.pokemon1.name}
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
                                src={`/PokemonTypes/${card.card1.FirstTypeIcon}-removebg-preview.png`}
                            />
                            <img
                                style={{ width: "2in", height: "3in", objectFit: "contain", paddingLeft: 5, }}
                                src={`/PokemonTypes/${card.card1.SecondTypeIcon}-removebg-preview.png`}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        className="card"
                        style={{
                            marginTop: 5,
                            background: `linear-gradient(to right, ${card.card1.FirstTypeColor} 50%, ${card.card1.FirstTypeColor} 50%)`,
                            width: "4in",
                            height: "7in",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            borderLeft: `4px solid ${card.card1.FirstTypeBorder}`,
                            borderBottom: `4px solid ${card.card1.FirstTypeBorder}`,
                            borderRight: `4px solid ${card.card1.FirstTypeBorder}`,
                            borderTop: `4px solid ${card.card1.FirstTypeBorder}`,
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
                            {pokemon.pokemon1.name}
                        </div>
                        <div className="pokemon" style={{ height: "100%" }}>
                            <img
                                src={pokemon.pokemon1.sprite}
                                alt={pokemon.pokemon1.name}
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
                                src={`/PokemonTypes/${card.card1.FirstTypeIcon}-removebg-preview.png`}
                            />
                        </div>
                    </div>
                )}
            </button>
        </div>
    );
};