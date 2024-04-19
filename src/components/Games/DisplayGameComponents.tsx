import "../Style/style.css";
import { Link } from "react-router-dom";

const DisplayGameInfo = ({game}:any) : JSX.Element => {   

    return(
            <tr className="table">
                {
                    Object.keys(game).map((key: any, index: number)=>{
                        if(key === 'gameId' || key === 'mathId') return null
                        const isBoolean = typeof game[key] === "boolean"
                        const setID = key.includes('app') ? key.split('app').pop() : undefined

                        let cellData;

                        if(isBoolean) {
                            let val = game[key] ? "*" : "";

                            if (setID){
                                cellData = <Link to={`/gameSet/${setID}`}>{val}</Link>
                            } else {
                                cellData = val
                            }
                        }   
                        else if(key === 'gameVersion'){
                            cellData = game[key].join(' | ')
                        }
                        else { 
                            cellData = game[key]
                        }

                        return (
                            <td key={game.gameName + "cell" + index} className={isBoolean ? (game[key] ? "green" : "red") : ""} >                            
                                {
                                    cellData
                                }
                            </td>
                        )
                    })  
                } 
            </tr>
    );
};

export default DisplayGameInfo;