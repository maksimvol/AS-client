export interface IGame {
    gameId: number;
    gameName: string;
    maxWLCMain: number;
    maxWLCFreegames: number;
    freegames: boolean;
    gamble: boolean;
    jackpot: boolean;
}

export interface IMath {
    mathId: number;
    mathName: string;
    percentage: number[];
    percentageSetList: number[];
}

export interface IJackpot {
    jackpotId: number;
    jackpotName: string;
    jackpotType: string[];
    percentageSetList: number[];
    gameList: number[];
}

export interface IApp {
    gameSetId: number;
    appName: string;
    jackpotId: number;
    jackpotVersion: [string, string];
    gameId: number;
    gameVersion: [string, string];
    region: string;
    interface: string;
}

export interface IUser {
    userId: number;
    userGroupId: number;
}
