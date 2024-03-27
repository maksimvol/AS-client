export interface Game {
    gameId: number;
    gameName: string;
    maxWLCMain: number;
    maxWLCFreegames: number;
    freegames: boolean;
    gamble: boolean;
    jackpot: boolean;
    version: [string, string];
}

export interface Math {
    mathId: number;
    mathName: string;
    percentage: number[];
    percentageSetList: number[];
}

export interface Jackpot {
    jackpotId: number;
    jackpotName: string;
    jackpotType: string[];
    percentageSetList: number[];
    version: [string, string];
}

export interface App {
    gameSetId: number;
    appName: string;
    jackpotId: number;
    jackpotVersion: [string, string];
    gameId: number;
    gameVersion: [string, string];
    region: string;
    interface: string;
}

export interface User {
    userId: number;
    userGroupId: number;
}