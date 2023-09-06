import React from 'react';
import { useGlobalState } from 'src/Functions/States';

export const Banner = () => {
    const { playerScore, computerScore } = useGlobalState();

    return (
        <div className="center">
            <img src="/PokemonTypes/pokeball-removebg-preview.png" alt="Left Image" className="image-left" />
            {computerScore === 18 ? <h1>Computer Wins!</h1> : (playerScore === 18 ? <h1>Player Wins!</h1> : <h1>Pokemon Type Battle</h1>)}
            <img src="/PokemonTypes/pokeball-removebg-preview.png" alt="Right Image" className="image-right" />
        </div>
    );
};