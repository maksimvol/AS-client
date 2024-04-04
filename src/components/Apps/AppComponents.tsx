import React from "react";
import { IApp } from "../../types/types";
import DisplayAppInfo from "./DisplayAppComponents";

const AppComponent: React.FC = () => {
    const app: IApp = {
        gameSetId: 1,
        appName: 'testJackpot',
        jackpotId: 1,
        jackpotVersion: ['1.0','1'],
        gameId: 1,
        gameVersion: ['1.0','1'],
        region: 'Columbia',
        interface: 'testInterface'
    };
    return(
    <div>
        <h1>App Information</h1>
        <DisplayAppInfo app={app} />
    </div>
    );
};
export default AppComponent;