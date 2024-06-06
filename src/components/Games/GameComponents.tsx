import React, { useEffect, useState } from "react";
import DisplayGameInfo from "./DisplayGameComponents";
import GameHeaders from "./GameHeaders";
import { CompoundTableHeaders } from "../Data/Headers";
import { gameMath } from "../Data/Math";
import { IApp, IGameModed } from "../../types/types";
import { getGame } from "../../util_game";
import { getApp } from "../../util_app";
// import { IGameModed } from "../../types/types";

const GameComponent: React.FC = () => {

    const [gameList, setGameList] = useState<IGameModed[]>([])
    const [appList, setAppList] = useState<IApp[]>([])

    useEffect(() => {
        getGame()
        .then(data => {
          setGameList(data)
        })
        .catch(error => {
          console.log("Error fetching game: ", error);
        })

        getApp()
        .then(data => {
            setAppList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])

    let headerValue = Object(CompoundTableHeaders);
    // let gamesValues = Object(games);
    
    // gamesValues.forEach((game:any)=>{ 
    //     game['mathName']  = gameMath.find((e)=>e.mathId === game.mathId)?.mathName ?? 'No Math Attached';
        
    //     app.forEach((app)=>{
    //         let n = 'app' + app.gameSetId;
    //         game[n] =  app.gameList.find((e)=>e.gameId === game.gameId) ? true : false;
    //     });
    // });


    appList.forEach((appList)=>{
        let v  = appList.appName;
        let n = 'app'+appList.gameSetId;
        headerValue[n] = [v, appList.gameSetId];
    })

    const processedGames = gameList.map(game => {
        game['MathName'] = gameMath.find(e => e.mathId === game.mathId)?.mathName ?? 'No Math Attached'

        appList.forEach((appList)=>{
            let n = 'app' + appList.gameSetId;
            game[n] =  appList.gameList.find((e)=>e.gameId === game.gameId) ? true : false;
        });
        
        return {...game}
    })
    console.log("processedGames", processedGames)
    return (
        <table>
            <thead>
                <GameHeaders key={'GamesListHeaders'} headerValues={headerValue}/>
            </thead>
            <tbody>
                {
                    processedGames.map((game, index) => (
                        <DisplayGameInfo key={"game" + index} game={game} />
                      ))
                    // Object.values(gamesValues).map((game, index) => (
                    //     <DisplayGameInfo key={"game"+index} game={game} />
                    // ))
                }
            </tbody>
        </table>
    );
};
export default GameComponent;