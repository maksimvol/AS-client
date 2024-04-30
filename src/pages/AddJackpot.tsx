import React, { useState } from "react";
import { IJackpot } from "../types/types";
import { games } from "../components/Data/Games";
import { jackpots } from "../components/Data/Jackpots";

const AddJackpot = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [jackpotType, setJackpotType] = useState<string[]>([]);
  const [percentageSetList, setPercentageSetList] = useState<number[]>([]);
  const [gameList, setGameList] = useState<number[]>([]);

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

  function handleSubmit(e: any): void {
    e.preventDefault();
    const NameAlreadyExists = jackpots.find((e)=>e.jackpotName === name);

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
      const newJackpot: IJackpot = {
        jackpotName: name,
        jackpotId: jackpots.length + 1, 
        jackpotType: jackpotType,
        percentageSetList: percentageSetList,
        gameList: gameList,
      }
      jackpots.push(newJackpot);
      console.log(games);
      setName("");
      setOkState(false);
      setJackpotType([]);
      setPercentageSetList([]);
      setGameList([]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <p><strong>add options to choose from existing games</strong></p>
        <input 
          type="number"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddJackpot;