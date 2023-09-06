import React from 'react';
import { useGlobalState } from 'src/Functions/States';
import { Player } from 'src/Components/Player';

export const Score = () => {
    const { playerScore, computerScore, playerAction, computerAction } = useGlobalState();

    return (
        <div className="container">
            <Player name="Player" score={playerScore} action={playerAction} />
            <Player
                name="Computer"
                score={computerScore}
                action={computerAction}
            />
        </div>
    );
};