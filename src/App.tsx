import React from 'react';
import './App.css';
import { GlobalStateProvider } from 'src/Functions/States';
import { Card0 } from 'src/Components/Card0'
import { Card1 } from 'src/Components/Card1'
import { Card2 } from 'src/Components/Card2'
import { Score } from 'src/Components/Score'
import { Banner } from 'src/Components/Banner'
import GameMechanics from 'src/Functions/gameMechanics';
import ShowWinner from 'src/Components/showWinner';

function App() {
    const { onActionSelected } = GameMechanics();

    return (
        <div className="center">
            <Banner />
            <Score />
            <div className="button-container">
                <Card0 action="card0" onActionSelected={onActionSelected} />
                <Card1 action="card1" onActionSelected={onActionSelected} />
                <Card2 action="card2" onActionSelected={onActionSelected} />
            </div>
            <ShowWinner />
        </div>
    );
}

function MainApp() {
    return (
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
}

export default MainApp;
