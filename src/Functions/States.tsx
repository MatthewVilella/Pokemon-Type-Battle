import React, { createContext, useContext, useState } from 'react';

interface cardType {
    cardType: string
    number: number;
    FirstTypeColor: string;
    FirstTypeIcon: string;
    FirstTypeBorder: string;
    SecondTypeColor: string;
    SecondTypeIcon: string;
    SecondTypeBorder: string;
}

interface pokemonType {
    cardType: string
    name: string;
    type0: string;
    type1: string;
    sprite: string;
}

export interface structureCardType {
    card0: cardType;
    card1: cardType;
    card2: cardType;
}

export interface structurePokemonType {
    pokemon0: pokemonType;
    pokemon1: pokemonType;
    pokemon2: pokemonType;
}

// Defining the context properties for the global state.
interface GlobalStateContextProps {
    card: structureCardType;
    setCard: React.Dispatch<React.SetStateAction<structureCardType>>;
    pokemon: structurePokemonType;
    setPokemon: React.Dispatch<React.SetStateAction<structurePokemonType>>;
    playerAction: string;
    setPlayerAction: React.Dispatch<React.SetStateAction<string>>;
    computerAction: string;
    setComputerAction: React.Dispatch<React.SetStateAction<string>>;
    playerScore: number;
    setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
    computerScore: number;
    setComputerScore: React.Dispatch<React.SetStateAction<number>>;
    winner: number;
    setWinner: React.Dispatch<React.SetStateAction<number>>;
    cardRotation: number;
    setCardRotation: React.Dispatch<React.SetStateAction<number>>;
}

// Creating the global state context.
const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const useGlobalState = (): GlobalStateContextProps => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export const GlobalStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [playerAction, setPlayerAction] = useState<string>("");
    const [computerAction, setComputerAction] = useState<string>("");
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);
    const [winner, setWinner] = useState<number>(0);
    const [cardRotation, setCardRotation] = useState<number>(3);

    const [pokemon, setPokemon] = useState<structurePokemonType>({
        pokemon0: {
            cardType: "card0",
            name: "",
            type0: "",
            type1: "",
            sprite: "",
        },
        pokemon1: {
            cardType: "card1",
            name: "",
            type0: "",
            type1: "",
            sprite: "",
        },
        pokemon2: {
            cardType: "card2",
            name: "",
            type0: "",
            type1: "",
            sprite: "",
        },
    });

    const [card, setCard] = useState<structureCardType>({
        card0: {
            cardType: "card0",
            number: 0,
            FirstTypeColor: "",
            FirstTypeIcon: "",
            FirstTypeBorder: "",
            SecondTypeColor: "",
            SecondTypeIcon: "",
            SecondTypeBorder: "",
        },
        card1: {
            cardType: "card1",
            number: 1,
            FirstTypeColor: "",
            FirstTypeIcon: "",
            FirstTypeBorder: "",
            SecondTypeColor: "",
            SecondTypeIcon: "",
            SecondTypeBorder: "",
        },
        card2: {
            cardType: "card2",
            number: 2,
            FirstTypeColor: "",
            FirstTypeIcon: "",
            FirstTypeBorder: "",
            SecondTypeColor: "",
            SecondTypeIcon: "",
            SecondTypeBorder: "",
        },
    });

    const contextValue = {
        card, setCard,
        playerAction, setPlayerAction,
        computerAction, setComputerAction,
        playerScore, setPlayerScore,
        computerScore, setComputerScore,
        winner, setWinner,
        cardRotation, setCardRotation,
        pokemon, setPokemon,
    };

    // Providing the context value to the components within the provider.
    return (
        <GlobalStateContext.Provider value={contextValue}>
            {children}
        </GlobalStateContext.Provider>
    );
};