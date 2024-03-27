import React from "react";
import { Game } from "../../types/types";

//TODO: READ ABOUT FC
const DisplayGameInfo: React.FC<{game: Game}> = ({ game }) => {
    return(
        <div>
            <h2>Game Information</h2>
            <p>Game ID: {game.gameId}</p>
            <p>Game Name: {game.gameName}</p>
            <p>Max Win Line Combination (Main): {game.maxWLCMain}</p> 
            <p>Max Win Line Combination (Freegames): {game.maxWLCFreegames}</p>
            <p>Freegames: {game.freegames ? 'Yes' : 'No'}</p>
            <p>Gamble: {game.gamble ? 'Yes' : 'No'}</p>
            <p>Jackpot: {game.jackpot ? 'Yes' : 'No'}</p>
            <p>Version: {game.version[0]} | Commit: {game.version[1]}</p>
        </div>
    );
};

export default DisplayGameInfo;