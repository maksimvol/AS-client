import React from "react";
import { jackpots } from "../Data/Jackpots";
import { games } from "../Data/Games";
import DisplayJackpotInfo from "./DisplayJackpotComponents";
import JackpotHeaders from "./JackpotHeaders";

const JackpotComponent: React.FC = () => {
    // Convert jackpots object to array
    const jackpotValues = Object.values(jackpots);

    // Link gameList IDs to actual game objects
    jackpotValues.forEach((jackpot: any) => {
        jackpot.gameList = games.find((game) => game.gameId === jackpot.gameList);
    });

    return (
        <table>
            <thead>
                <JackpotHeaders jackpots={jackpots} />
            </thead>
            <tbody>
                {jackpotValues.map((jackpot: any, index) => (
                    <DisplayJackpotInfo key={"jackpot" + index} jackpot={jackpot} />
                ))}
            </tbody>
        </table>
    );
};

export default JackpotComponent;
