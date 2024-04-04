import React from "react";
import { IJackpot } from "../../types/types";
import "../Style/style.css";

const DisplayJackpotInfo: React.FC<{jackpot: IJackpot}> = ({ jackpot }) => {
    return(
        <tr className="table">
            <td>{jackpot.jackpotName}</td>
            <td>{jackpot.gameList.join(', ')}</td>
            {/* <td>{jackpot.jackpotId}</td> */}
            {/* <td>{jackpot.jackpotType}</td> */}
            {/* <td>{jackpot.percentageSetList.join(', ')}</td> */}
            {/* <td>{jackpot.version[0]}</td> */}
            {/* <td>{jackpot.version[1]}</td> */}
        </tr>
    );
};

export default DisplayJackpotInfo;