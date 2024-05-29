import React, { useEffect, useState } from "react";
import { IGame, IJackpot } from "../types/types";
import { games } from "../components/Data/Games";
import { jackpots } from "../components/Data/Jackpots";
import { addJackpot, getJackpot } from "../util_jackpot";
import { getGame } from "../util_game";

const AddJackpot = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [jackpotType, setJackpotType] = useState<string[]>([]);
  const [percentageSetList, setPercentageSetList] = useState<number[]>([]);
  const [gameList, setGameList] = useState<number[]>([]);

  const [selectedGameId, setSelectedGameId] = useState(Number);

  const [jackpot, setJackpot] = useState<IJackpot[]>([])
  const [game, setGame] = useState<IGame[]>([])

  useEffect(() => {
    getJackpot()
    .then(data => {
      setJackpot(data)      
    })
    .catch(error => {
      console.log("Error fetching jackpot: ", error);
    })

    getGame()
    .then(data => {
      setGame(data)      
    })
    .catch(error => {
      console.log("Error fetching game: ", error);
    })
  },[])

  function checkCompatibility(e: React.ChangeEvent<HTMLInputElement>): void {
    const input = e.target.value;
    // Number(e.target.value)
    if (input){
      setName(input);
      setOkState(true);
    } else{
      setName("");
      setOkState(false);
    }
  } 

  function handleJackpotType(e: React.ChangeEvent<HTMLInputElement>): void {
    const jackpotType = e.target.value.split(' ');
    setJackpotType(jackpotType);
  }
  function handlePercentageSetList(e: React.ChangeEvent<HTMLInputElement>): void {
    const percentageSetList = e.target.value.split(' ').map(Number);
    setPercentageSetList(percentageSetList);
  }

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();
    const NameAlreadyExists = jackpot.find((e)=>e.jackpotName === name);

    const isEmptyName = !name;
    const isEmptyJackpotType = !jackpotType;
    const isEmptyPercentageSetList = !percentageSetList;
    const isEmptyGameList = !gameList;

    if(NameAlreadyExists){
        alert("Game Name already exists! Please type different Game Name!");
    } else if(isEmptyName || isEmptyJackpotType || isEmptyPercentageSetList || isEmptyGameList){
        alert("Field Is Empty! Please Fill all the required fields!")
        if(isEmptyName)
          alert("Jackpot Name")
        else if(isEmptyJackpotType)
          alert("Jackpot Type")
        else if(isEmptyPercentageSetList)
          alert("Percentage Set List")
        else if(isEmptyGameList)
          alert("Game List")
    } else{
      try{
        const newJackpot: IJackpot = {
          jackpotName: name,
          jackpotId: jackpots.length + 1, 
          jackpotType: jackpotType,
          percentageSetList: percentageSetList,
          gameList: gameList,
        }
        await addJackpot(newJackpot)
        console.log("Jackpot added successfully");
        setJackpot([...jackpot, newJackpot]);
        setName("");
        setOkState(false);
        setJackpotType([]);
        setPercentageSetList([]);
        setGameList([]);
      } catch (error) {
        console.error("Error adding jackpot:", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='main'>
      <h1>Add Jackpot</h1>
      <label>Jackpot Name:
        <input className={isOk ? "default" : "error"}
          type="text" 
          value={name}
          onChange={(e) => checkCompatibility(e)}
        />
      </label>
      <br />
      <label>
        Jackpot Id: 
        <input
          type="number"
          value={jackpots.length + 1}
          disabled
        />
      </label>
      <br />
      <label>
        Jackpot Type: 
        <input
          type="text"
          onChange={(e) => handleJackpotType(e)}
        />
      </label>
      <br />
      <label>Percentage Set List:
        <input 
          type="number"
          onChange={(e) => handlePercentageSetList(e)}
        />
      </label>
      <br />
      <label>Game List:
        <select
          value={selectedGameId ? selectedGameId.toString() : ''} 
          onChange={(e) => setSelectedGameId(parseInt(e.target.value))} 
        >
          <option value="">Select Game</option>

          {game.filter((gameOption) => gameOption.jackpot).map((gameOption) => (
            <option key={gameOption.gameId} value={gameOption.gameId.toString()}>
              {gameOption.gameName}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      <strong>add multiple game selection to game list</strong>
    </form>
  );
};

export default AddJackpot;