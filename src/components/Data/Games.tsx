import { IGame } from "../../types/types";

export const games: IGame[] = [{
    gameName: 'testGame1',
    gameId: 1,
    maxWLCMain: 5000,
    maxWLCFreegames: 10000,
    freegames: true,
    gamble: true,
    jackpot: true,
    gameVersion: ['1.0', '1'],
    mathId: 1
},
{
    gameName: 'testGame2',
    gameId: 2,
    maxWLCMain: 6000,
    maxWLCFreegames: 12000,
    freegames: true,
    gamble: true,
    jackpot: true,
    gameVersion: ['1.0', '1'],
    mathId: 1
},
{
    gameName: 'testGame3',
    gameId: 3,
    maxWLCMain: 7000,
    maxWLCFreegames: 14000,
    freegames: true,
    gamble: true,
    jackpot: true,
    gameVersion: ['1.0', '1'],
    mathId: -1,
},
{
    gameName: 'testGame4',
    gameId: 4,
    maxWLCMain: 8000,
    maxWLCFreegames: 16000,
    freegames: true,
    gamble: true,
    jackpot: true,
    gameVersion: ['1.0', '1'],
    mathId: 3,
}
];