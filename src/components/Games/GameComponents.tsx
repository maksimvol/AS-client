import React from "react";
import DisplayGameInfo from "./DisplayGameComponents";
import GameHeaders from "./GameHeaders";
import { games } from "../Data/Games";
import { CompoundTableHeaders } from "../Data/Headers";
import { jackpots } from "../Data/Jackpots";

const GameComponent: React.FC = () => {

    let headerValue = Object(CompoundTableHeaders);

    jackpots.forEach((jackpot, index)=>{
        let v  = jackpot.jackpotName
        let n = 'jp'+index
        // Object.assign(headerValue, {n: v})
        headerValue[n] = v
    })
    console.log(Object.values(headerValue))
    
    return (
        <table>
            <thead>
                <GameHeaders key={'GamesListHeaders'} headerValues={headerValue}/>
            </thead>
            <tbody>
                {
                    Object.values(games).map((game, index) => (
                        <DisplayGameInfo key={"game"+index} game={game} />
                    ))
                }
            </tbody>
        </table>
    );
};
export default GameComponent;