import { IApp } from "../../types/types";

export const app: IApp[] = [{
    gameSetId: 1,
    appName: 'testApp1',
    jackpotId: 1,
    jackpotVersion: ['1.0','1'],// move to build set history
    region: 'Columbia', // move to build set history
    interface: 'testInterface',
    gameList:[{
        gameId: 1,
        gameVersion: ['4.0.0.2x', '10'],
    }, 
    ]
},
{
    gameSetId: 2,
    appName: 'testApp2',
    jackpotId: 2,
    jackpotVersion: ['1.0','1'],// move to build set history
    region: 'Columbia', // move to build set history
    interface: 'testInterface',
    gameList:[{
        gameId: 1,
        gameVersion: ['4.0.0.1', '10'],
    }, 
    {
        gameId: 2,
        gameVersion: ['4.0.0.1', '10'],
    },
    ]
}];
