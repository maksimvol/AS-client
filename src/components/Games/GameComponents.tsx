import React, { useEffect, useState } from "react";
import DisplayGameInfo from "./DisplayGameComponents";
import GameHeaders from "./GameHeaders";
import { CompoundTableHeaders } from "../Data/Headers";
import { IApp, IGameModed, IMath } from "../../types/types";
import { getGame } from "../../util_game";
import { getApp } from "../../util_app";
import { getMath } from "../../util_math";

const GameComponent: React.FC = () => {

    const [gameList, setGameList] = useState<IGameModed[]>([])
    const [appList, setAppList] = useState<IApp[]>([])
    const [math, setMath] = useState<IMath[]>([])


    useEffect(() => {
        getGame()
        .then(gameData => {
          setGameList(gameData)
        })
        .catch(error => {
          console.log("Error fetching game: ", error);
        })

        getApp()
        .then(appData => {
            setAppList(appData)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })

        getMath()
        .then(mathData => {
            setMath(mathData)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])

    let headerValue = Object(CompoundTableHeaders);



    appList.forEach((appList)=>{
        let v  = appList.appName;
        let n = 'app'+appList.gameSetId;
        headerValue[n] = [v, appList.gameSetId];
    })

    const processedGames = gameList.map(game => {
        game['MathName'] = math.find(e => e.mathId === game.mathId)?.mathName ?? 'No Math Attached'

        appList.forEach((appList)=>{            
            let n = 'app' + appList.gameSetId;
            game[n] =  appList.gameList.find((e)=>e.gameId === game.gameId) ? true : false;
        });
        return {...game}

    })

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
                }
            </tbody>
        </table>
    );
};
export default GameComponent;