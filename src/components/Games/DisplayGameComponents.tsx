import React from "react";
import { IGame } from "../../types/types";
import "../Style/style.css";

const DisplayGameInfo: React.FC<{game: IGame}> = ({ game }) => {
    return(
                <tr className="table">
                    <td>{game.gameName}</td>
                    {/* <td>{game.gameId}</td> */}
                    <td>{game.maxWLCMain}</td>
                    <td>{game.maxWLCFreegames}</td>
                    <td>{game.freegames ? "Yes" : "No"}</td>
                    <td>{game.gamble ?  (
                        "Yes"
                        ) : (
                            game.gamble === false ? "No" : "Optional")}</td>
                    <td>{game.jackpot ? "Yes" : "No"}</td>
                    {/* <td>{game.version[0]}</td> */}
                    {/* <td>{game.version[1]}</td> */}
            </tr>
    );
};

export default DisplayGameInfo;