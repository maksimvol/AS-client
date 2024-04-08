import "../Style/style.css";

const HandleGameClick = ({gameClicked}:any) => {
    console.log("Clicked game: ", gameClicked);
}

const DisplayGameInfo = ({game}:any) : JSX.Element => {   

    return(
            <tr className="table">
                {
                    Object.keys(game).map((key: any, index: number)=>{
                        if(key === 'gameId' || key === 'mathId') return
                        const isBoolean = typeof game[key] === "boolean"
                        return (
                            <td key={game.gameName + "cell" + index} className={isBoolean ? (game[key] ? "green" : "red") : ""} >                            
                                {
                                    key === 'gameName' ? <button
                                    // className="button" 
                                    onClick={() => HandleGameClick({game})}>{game[key]}</button> :
                                    isBoolean ?  (game[key] ? "*" : "") : game[key]
                                }
                            </td>
                        )

                    })  
                } 
            </tr>
    );
};

export default DisplayGameInfo;