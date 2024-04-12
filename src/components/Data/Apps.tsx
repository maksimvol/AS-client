import { IApp } from "../../types/types";

export const app: IApp[] = [{
    gameSetId: 1,
    appName: 'testApp1',
    jackpotId: 1,
    jackpotVersion: ['1.0','1'],// move to build set history
    region: 'Columbia', // move to build set history
    interface: 'testInterface',
    gameList:[{
        gameId: 55,
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

// const sa = [{
//     appId: 1,
//     buildsInfo: [{
//         region: 'za',        
//         buildlist: [
//             {
//                 appVersion: ['4.0.0.2', '10'], // version, commit
//                 jpVerison: [1, '4.0.0.1', '2'], // gameid, version, commit
//                 gamesInfo:[[1, '4.0.0.1', '10'], [2, '4.0.0.1', '15']], //[ gameid, version, commit]
//                 date: "date" // date of build
//             },   
//             {
//                 appVersion: ['4.0.0.3', '13'], // version, commit
//                 jpVerison: [1, '4.0.0.1', '2'], // gameid, version, commit
//                 gamesVersion:[[1, '4.0.0.1', '10'], [2, '4.0.0.1', '15']], //[ gameid, version, commit]
//                 date: "date" // date of build
//             }         
//         ] 
//     },
//     {
//         region: 'co',
//         buildlist: [
//             {
//                 appVersion: ['4.0.0.2', '10'], // version, commit
//                 gamesVersion:[[1, '4.0.0.1', '10'], [2, '4.0.0.1', '15']], //[ gameid, version, commit]
//                 jpVerison: [1, '4.0.0.1', '2'], // gameid, version, commit
//                 date: "date" // date of build
//             },   
//             {
//                 appVersion: ['4.0.0.3', '13'], // version, commit
//                 gamesVersion:[[1, '4.0.0.1', '10'], [2, '4.0.0.1', '15']], //[ gameid, version, commit]
//                 jpVerison: [1, '4.0.0.1', '2'], // gameid, version, commit
//                 date: "date" // date of build
//             }         
//         ] 
//     }
// ],
// }
