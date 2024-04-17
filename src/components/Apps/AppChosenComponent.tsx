import React from "react";
import { app } from "../Data/Apps";
import { useParams } from "react-router-dom";
import { IApp, IGame } from "../../types/types";
import { games } from "../Data/Games";

const AppChosenComponent: React.FC = () => {
    let {setId} = useParams()
    let currentAppId = Number(setId)
    const currentApp: IApp | undefined | null = app.find((appV: IApp) => appV.gameSetId === currentAppId)
    
    if (!currentApp) return <></>;

    const gameListGames: IGame[] = games.filter(game => currentApp.gameList.map(e => e.gameId).includes(game.gameId));

    console.log(gameListGames)
    console.log(currentApp)
    console.log(app)

    return(
        <>
            <h2>App Name: {currentApp.appName}</h2>
            <h2>Games Info</h2>
            {gameListGames.map(game => (
                <li key={game.gameId}>
                    <strong>Game Name: </strong>{game.gameName} | <strong>Game Id: </strong> {game.gameId}
                </li>
            ))}
            
            {/* <h2>Game ID's</h2>{currentApp.gameList.map(game => game.gameId).join(", ")}
            <h2>Game Name's</h2>
                <ul>
                    {gameListGames.map(game => (
                        <li key={game.gameId}>{game.gameName}</li>
                    ))}
                </ul> */}
        </>
    );
};
export default AppChosenComponent;