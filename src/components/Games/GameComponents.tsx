import React from "react";
import { Game } from "../../types/types";
import DisplayGameInfo from "./DisplayGameComponents";

const GameComponent: React.FC = () => {
    const games: Game[] = [{
        gameId: 1,
        gameName: 'testGame1',
        maxWLCMain: 5000,
        maxWLCFreegames: 10000,
        freegames: true,
        gamble: true,
        jackpot: true,
        version: ['1.0','1']
    },
    {
        gameId: 2,
        gameName: 'testGame2',
        maxWLCMain: 6000,
        maxWLCFreegames: 12000,
        freegames: true,
        gamble: true,
        jackpot: true,
        version: ['1.0','1']
    }
];

const GameComponents = [];

for (let i = 0; i < games.length; i++){
    const game = games[i];
    GameComponents.push(
    <div key={i}>
        <h1>Game {i + 1} Information</h1>
        <DisplayGameInfo game={game} />
    </div>)
}
    return(
    <div>
        {GameComponents}
    </div>
    );
};
export default GameComponent;