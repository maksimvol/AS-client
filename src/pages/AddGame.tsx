import React, { useState } from "react";
import { IGame } from "../types/types";
import { games } from "../components/Data/Games";

const AddGame = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);

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
    const newGame: IGame = {
      gameName: name,
      gameId: games.length + 1,
      maxWLCMain: 0,
      maxWLCFreegames: 0,
      freegames: false,
      gamble: false,
      jackpot: false,
      mathId: 0,
      gameVersion: ['1.0', '1']
    }
    games.push(newGame);
    console.log(games);
    setName("");
    setOkState(false);
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
      <label>Max WLC Main:
        <input 
          type="number"
          value={0} 
          disabled
        />
      </label>
      <br />
      <label>Max WLC FreeGames:
        <input 
          type="number"
          value={0} 
          disabled
        />
      </label>
      <br />
      <label>Freegames:
        <input 
          type="checkbox"
        />
      </label>
      <br />
      <label>Gamble:
        <input 
          type="checkbox"
          value='false' 
        />
      </label>
      <br />
      <label>Jackpot:
        <input 
          type="checkbox"
          value='false' 
        />
      </label>
      <br />
      <label>Math Id:
        <input 
          type="number"
          value={0} 
          disabled
        />
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