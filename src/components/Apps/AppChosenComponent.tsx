import React from "react";
import { app } from "../Data/Apps";
import { useParams } from "react-router-dom";
import { IApp, IGame, IJackpot } from "../../types/types";
import { games } from "../Data/Games";
import { CompoundTableHeaders } from "../Data/Headers";
import GameHeaders from "../Games/GameHeaders";
import DisplayGameInfo from "../Games/DisplayGameComponents";
import DisplayJackpotInfo from "../Jackpots/DisplayJackpotComponents";
import { jackpots } from "../Data/Jackpots";
import JackpotHeaders from "../Jackpots/JackpotHeaders";
import DisplayAppInfo from "./DisplayAppComponents";
import AppHeaders from "./AppHeaders";

const AppChosenComponent: React.FC = () => {
    let {setId} = useParams()
    let currentAppId = Number(setId)
    const currentApp: IApp | undefined | null = app.find((appV: IApp) => appV.gameSetId === currentAppId)
    
    if (!currentApp) return <></>;

    const gameListGames: IGame[] = games.filter(game => currentApp.gameList.map(e => e.gameId).includes(game.gameId));
    const jackpotList: IJackpot[] = jackpots.filter(jackpot => currentApp.jackpotId === jackpot.jackpotId);
    
    console.log(gameListGames)
    console.log(currentApp)
    console.log(app)

    let headerValue = Object(CompoundTableHeaders);

    app.forEach((app)=>{
        let v  = app.appName;
        let n = 'app'+app.gameSetId;
        headerValue[n] = [v, app.gameSetId];
    })

    return(
        <>
            <h2>App Name: {currentApp.appName}</h2>
            <h2>App Info</h2>
            <table>
                <thead>
                    <AppHeaders key={'AppHeaders'} app={app}/>
                </thead>
                <tbody>
                    <DisplayAppInfo app={currentApp} />
                </tbody>
            </table>
            <h2>Games Info</h2>
            <table>
                <thead>
                    <GameHeaders key={'GamesListHeaders'} headerValues={headerValue}/>
                </thead>
                <tbody>
                    {gameListGames.map((game, index) => (
                        <DisplayGameInfo key={"game"+index} game={game} />
                    ))}
                </tbody>
            </table>
            <h2>Jackpot Info</h2>
            <table>
                <thead>
                    <JackpotHeaders key={'JackpotHeaders'} jackpots={jackpots}/>
                </thead>
                <tbody>
                    {jackpotList.map((jackpot, index) => (
                        <DisplayJackpotInfo key={"jackpot" + index} jackpot={jackpot} />
                    ))}
                </tbody>
            </table>
    </>
    );
};
export default AppChosenComponent;