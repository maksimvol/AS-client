import React from "react";
import { IApp, IJackpot } from "../../types/types";
import "../Style/style.css";
import { app } from "../Data/Apps";
import { useParams } from "react-router-dom";

const DisplayJackpotInfo: React.FC<{jackpot: IJackpot}> = ({ jackpot }) => {
    let {setId} = useParams()
    let currentAppId = Number(setId)
    const currentApp: IApp | undefined | null = app.find((appV: IApp) => appV.gameSetId === currentAppId)
    return(
        <tr className="table">
            <td>{jackpot.jackpotName}</td>
            <td>{currentApp?.jackpotVersion.join(' | ')}</td>
        </tr>
    );
};

export default DisplayJackpotInfo;