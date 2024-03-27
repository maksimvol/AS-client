import React from "react";
import { App } from "../../types/types";

const DisplayAppInfo: React.FC<{app: App}> = ({ app }) => {
    return(
        <div>
            <h2>App Information</h2>
            <p>Game Set ID: {app.gameSetId}</p>
            <p>App Name: {app.appName}</p>
            <p>Jackpot ID: {app.jackpotId}</p> 
            <p>Jackpot Version: {app.jackpotVersion[0]} | Commit: {app.jackpotVersion[1]}</p>
            <p>Game ID: {app.gameId}</p>
            <p>Game Version: {app.gameVersion[0]} | Commit: {app.gameVersion[1]}</p>
            <p>Region: {app.region}</p>
            <p>Interface: {app.interface}</p>
        </div>
    );
};

export default DisplayAppInfo;