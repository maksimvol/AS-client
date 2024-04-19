import React from "react";
import DisplayGameInfo from "./DisplayGameComponents";
import GameHeaders from "./GameHeaders";
import { games } from "../Data/Games";
import { CompoundTableHeaders } from "../Data/Headers";
import { gameMath } from "../Data/Math";
import { app } from "../Data/Apps";
// import { IGameModed } from "../../types/types";

const GameComponent: React.FC = () => {
    let headerValue = Object(CompoundTableHeaders);
    let gamesValues = Object(games);
    
    gamesValues.forEach((game:any)=>{ 
        game['mathName']  = gameMath.find((e)=>e.mathId === game.mathId)?.mathName ?? 'No Math Attached';
        
        app.forEach((app)=>{
            let n = 'app' + app.gameSetId;
            game[n] =  app.gameList.find((e)=>e.gameId === game.gameId) ? true : false;
        });
      console.log(game)
    });


    app.forEach((app)=>{
        let v  = app.appName;
        let n = 'app'+app.gameSetId;
        headerValue[n] = [v, app.gameSetId];
    })
    
    return (
        <table>
            <thead>
                <GameHeaders key={'GamesListHeaders'} headerValues={headerValue}/>
            </thead>
            <tbody>
                {
                    Object.values(gamesValues).map((game, index) => (
                        <DisplayGameInfo key={"game"+index} game={game} />
                    ))
                }
            </tbody>
        </table>
    );
};
export default GameComponent;