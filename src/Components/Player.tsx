import React from 'react';
import GameMechanics from 'src/Functions/gameMechanics';

export const Player = ({ name = "Player", score = 0, action = "card0" }) => {

    const { ActionIcon } = GameMechanics();

    return (
        <div className="player">
            <div className="score">{`${name}: ${score}`}</div>
            <div className="action" >
                {action && <ActionIcon action={action} style={{ width: '350px', height: '250px' }} />}
            </div>
        </div>
    );
};