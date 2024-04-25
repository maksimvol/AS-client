import React, { useState } from "react";
import { IGame, IMath } from "../types/types";
import { games } from "../components/Data/Games";
import { gameMath } from "../components/Data/Math";

const AddGame = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [systemId, setSystemId] = useState(0);
  const [maxWLCMain, setMaxWLCMain] = useState(0);
  const [maxWLCFreegames, setMaxWLCFreegames] = useState(0);
  const [freegames, setFreegames] = useState(false);
  const [gamble, setGamble] = useState(false);
  const [jackpot, setJackpot] = useState(false);
  const [selectedMathId, setSelectedMathId] = useState(Number);

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
  function handleSubmit(e: any): void {
    e.preventDefault();
    const NameAlreadyExists = games.find((e)=>e.gameName === name);
    const IdAlreadyExists = games.find((e)=>e.systemId === systemId);
    const isEmpty = !name;
    if(NameAlreadyExists){
        alert("Game Name already exists! Please type different Game Name!");
    } else if(IdAlreadyExists){
        alert("System Id already exists! Please type different System Id!");
    } else if(isEmpty){
        alert("Field Is Empty! Please Fill all the required fields!")
    } else{
      const newGame: IGame = {
        gameName: name,
        gameId: games.length + 1, 
        systemId: systemId,
        maxWLCMain: maxWLCMain,
        maxWLCFreegames: maxWLCFreegames,
        freegames: freegames,
        gamble: gamble,
        jackpot: jackpot,
        mathId: selectedMathId,
        gameVersion: ['1.0', '1']
      }
      games.push(newGame);
      console.log(games);
      setName("");
      setOkState(false);
      setMaxWLCMain(0);
      setMaxWLCFreegames(0);
      setFreegames(false);
      setGamble(false);
      setJackpot(false);
      setSelectedMathId(0);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Game Name:
        <input className={isOk ? "default" : "error"}
          type="text" 
          value={name}
          onChange={(e) => checkCompatibility(e)}
        />
      </label>
      <br />
      <label>
        Game Id: 
        <input
          type="number"
          value={games.length + 1}
          disabled
        />
      </label>
      <br />
      <label>
        System Id: 
        <input
          type="number"
          onChange={(e) => setSystemId(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>Max WLC Main:
        <input 
          type="number"
          onChange={(e) => setMaxWLCMain(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>Max WLC FreeGames:
        <input 
          type="number"
          onChange={(e) => setMaxWLCFreegames(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>Freegames:
        <input 
          type="checkbox"
          checked={freegames}
          onChange={() => setFreegames(!freegames)}
        />
      </label>
      <br />
      <label>Gamble:
        <input 
          type="checkbox"
          checked={gamble}
          onChange={() => setGamble(!gamble)}
        />
      </label>
      <br />
      <label>Jackpot:
        <input 
          type="checkbox"
          checked={jackpot}
          onChange={() => setJackpot(!jackpot)}
        />
      </label>
      <br />
      <label>Math Id:
        <select 
          value={selectedMathId}
          onChange={(e) => setSelectedMathId(parseInt(e.target.value))}
        >
        {gameMath.map((math: IMath) => (
          <option key={math.mathId} value={math.mathId}>
            {math.mathName}
          </option>
        ))}
        </select>
      </label>
      <br />
      <label>Game Version:
        <input 
          type="string"
          value={['1.0', '1'].join(' | ')}
          disabled
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddGame;