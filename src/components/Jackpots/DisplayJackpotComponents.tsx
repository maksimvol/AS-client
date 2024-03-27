import React from "react";
import { Jackpot } from "../../types/types";

//TODO: READ ABOUT FC
const DisplayJackpotInfo: React.FC<{jackpot: Jackpot}> = ({ jackpot }) => {
    return(
        <div>
            <h2>Jackpot Information</h2>
            <p>Game ID: {jackpot.jackpotId}</p>
            <p>Game Name: {jackpot.jackpotName}</p>
            <p>Jackpot Type: {jackpot.jackpotType}</p>
            <p>Percentage Set List: [{jackpot.percentageSetList.join(', ')}]</p>
            <p>Version: {jackpot.version[0]} | Commit: {jackpot.version[1]}</p>
        </div>
    );
};

export default DisplayJackpotInfo;