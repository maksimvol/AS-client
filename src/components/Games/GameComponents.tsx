import React, { useEffect, useState } from "react";
import DisplayGameInfo from "./DisplayGameComponents";
import GameHeaders from "./GameHeaders";
import { CompoundTableHeaders } from "../Data/Headers";
import { IApp, IGame, IGameModed, IMath } from "../../types/types";
import { getGame } from "../../util_game";
import { getApp } from "../../util_app";
import { getMath } from "../../util_math";

const GameComponent: React.FC = () => {

    const [gameList, setGameList] = useState<IGameModed[]>([])
    const [appList, setAppList] = useState<IApp[]>([])
    const [math, setMath] = useState<IMath[]>([])
    const [sortByName, setSortByName] = useState<boolean>(false);
    const [filterFreegames, setFilterFreegames] = useState<boolean>(false);
    const [filterGamble, setFilterGamble] = useState<boolean>(false);
    const [filterJackpot, setFilterJackpot] = useState<boolean>(false);


    useEffect(() => {
        getGame()
        .then(gameData => {
            if (sortByName) {
                gameData.sort((a: IGameModed, b: IGameModed) => a.gameName.localeCompare(b.gameName));
            }
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
      },[sortByName])

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

    const nameSort = () => {
        setSortByName(prev => !prev);
    };
    const toggleFilterFreegames = () => {
        setFilterFreegames(prev => !prev);
    };
    const toggleFilterGamble = () => {
        setFilterGamble(prev => !prev);
    };
    const toggleFilterJackpot = () => {
        setFilterJackpot(prev => !prev);
    };

    const filteredGames = processedGames.filter(game =>
        (!filterFreegames || game.freegames) &&
        (!filterGamble || game.gamble) &&
        (!filterJackpot || game.jackpot)
    );

    return (
        <>
        <button className="button" onClick={nameSort}>Sort by Name</button><br />
        <br />
        <button className="button" onClick={toggleFilterFreegames}>
                {filterFreegames ? "Show All" : "Filter Freegames"}
            </button>
        <button className="button" onClick={toggleFilterGamble}>
            {filterGamble ? "Show All" : "Filter Gamble"}
        </button>
        <button className="button" onClick={toggleFilterJackpot}>
            {filterJackpot ? "Show All" : "Filter Jackpot"}
        </button><br />
        <br />
            <table>
                <thead>
                    <GameHeaders key={'GamesListHeaders'} headerValues={headerValue}/>
                </thead>
                <tbody>
                    {
                        filteredGames.map((game, index) => (
                            <DisplayGameInfo key={"game" + index} game={game} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
export default GameComponent;