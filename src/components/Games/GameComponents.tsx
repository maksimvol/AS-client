import React from "react";
import DisplayGameInfo from "./DisplayGameComponents";
import GameHeaders from "./GameHeaders";
import { games } from "../Data/Games";
import { CompoundTableHeaders } from "../Data/Headers";
import { jackpots } from "../Data/Jackpots";
import { gameMath } from "../Data/Math";

const GameComponent: React.FC = () => {

    let headerValue = Object(CompoundTableHeaders);
    let gamesValues = Object(games);
    
    gamesValues.forEach((game:any)=>{ 
        game['mathName']  = gameMath.find((e)=>e.mathId === game.mathId)?.mathName ?? 'No Math Attached';
        
        jackpots.forEach((jackpot, jpindex)=>{
            let n = 'jp' + jpindex;
            game[n] =  jackpot.gameList.find((e)=>e===game.gameId) ? true : false;
        });
      console.log(game)
    });

    jackpots.forEach((jackpot, index)=>{
        let v  = jackpot.jackpotName;
        let n = 'jp'+index;
        headerValue[n] = v;
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