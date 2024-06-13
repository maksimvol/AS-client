import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { IApp, IGame, IGameModed, IJackpot, IMath } from "../../types/types";
// import { CompoundTableHeaders } from "../Data/Headers";
// import GameHeaders from "../Games/GameHeaders";
// import DisplayGameInfo from "../Games/DisplayGameComponents";
// import { getApp } from "../../util_app";
// import { getGame } from "../../util_game";
// import { getJackpot } from "../../util_jackpot";
// import { getMath } from "../../util_math";
// import ChosenGameHeaders from "./ChosenGameHeaders";
// import MathHeaders from "../Maths/MathHeaders";
// import DisplayMathInfo from "../Maths/DisplayMathComponents";

// const GameChosenComponent: React.FC = () => {
//     const [gameList, setGameList] = useState<IGameModed[]>([])
//     const [jackpotList, setJackpotList] = useState<IJackpot[]>([])
//     const [appList, setAppList] = useState<IApp[]>([])
//     const [math, setMath] = useState<IMath[]>([])

//     useEffect(() => {
//         getGame()
//         .then(data => {
//           setGameList(data)
//         })
//         .catch(error => {
//           console.log("Error fetching game: ", error);
//         })

//         getMath()
//         .then(data => {
//             setMath(data)
//         })
//         .catch(error => {
//           console.log("Error fetching app: ", error);
//         })
//       },[])

//     let {gameId} = useParams()
//     let currentGameId = Number(gameId)
//     const currentGame: IGameModed | undefined | null = gameList.find((gameV: IGameModed) => gameV.gameId === currentGameId)
    
//     if (!currentGame) return <></>;

//     let headerValue = Object(CompoundTableHeaders);

//     gameList.forEach((gameList)=>{
//         let v  = gameList.gameName;
//         let n = 'game'+gameList.gameId;
//         headerValue[n] = [v, gameList.gameId];
//     })
//     math.forEach((math)=>{
//         let v  = math.mathName;
//         let n = 'app'+math.mathId;
//         headerValue[n] = [v, math.mathId];
//     })

//     const filteredMath = math.filter(math => 
//         math.mathId === currentGame.mathId
//     );

//     return(
//         <div className="main">
//             <h2>Game Name: {currentGame.gameName}</h2>
//             <h2>Game Info</h2>
//             <table>
//                 <thead>
//                     <ChosenGameHeaders key={'ChosenGameHeaders'} game={gameList}/>
//                 </thead>
//                 <tbody>
//                     <DisplayGameInfo game={currentGame} />
//                 </tbody>
//             </table>
//             <br />
//             <Link className="button" to={`/chosenGameUpdate/${currentGameId}`}>
//                 Update {currentGame.gameName} Game
//             </Link>
//             <button type="button" className="buttonDelete">Delete {currentGame.gameName} Game</button>
//             <h2>Math Info</h2>
//             <table>
//                 <thead>
//                     <MathHeaders key={'MathHeaders'} math={headerValue}/>
//                 </thead>
//                 <tbody>
//                     {filteredMath.map((math, index) => (
//                         <DisplayMathInfo key={"math" + index} math={math} />
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default GameChosenComponent;