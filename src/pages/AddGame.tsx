import React, { useEffect, useState } from "react";
import { IGame, IMath } from "../types/types";
import { games } from "../components/Data/Games";
import { gameMath } from "../components/Data/Math";
import { addGame, getGame } from "../util_game";
import { getMath } from "../util_math";

const AddGame = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [systemId, setSystemId] = useState(0);
  const [maxWLCMain, setMaxWLCMain] = useState(0);
  const [maxWLCFreegames, setMaxWLCFreegames] = useState(0);
  const [freegames, setFreegames] = useState(false);
  const [gamble, setGamble] = useState(false);
  const [jackpot, setJackpot] = useState(false);
  const [selectedMathId, setSelectedMathId] = useState<number | null>(null);

  const [game, setGame] = useState<IGame[]>([])
  const [selectedGame, setSelectedGame] = useState({})

  const [math, setMath] = useState<IMath[]>([]); 

  useEffect(() => {
    getGame()
    .then(data => {
      setGame(data)      
    })
    .catch(error => {
      console.log("Error fetching game: ", error);
    })

    getMath()
    .then(data => {
      setMath(data)      
    })
    .catch(error => {
      console.log("Error fetching math: ", error);
    })
  },[])

  function checkCompatibility(e: React.ChangeEvent<HTMLInputElement>): void {
    const input = e.target.value;
    if (input){
      setName(input);
      setOkState(true);
    } else{
      setName("");
      setOkState(false);
    }
  } 
  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();
    const NameAlreadyExists = game.find((e)=>e.gameName === name);
    const IdAlreadyExists = game.find((e)=>e.systemId === systemId);

    const isEmptyName = !name;
    const isEmptySystemId = !systemId;
    const isEmptyMaxWLCMain = maxWLCMain <= 0;
    const isEmptyMaxWLCFreegames = maxWLCFreegames <= 0;
    const isEmptySelectedMathId = !selectedMathId

    if(NameAlreadyExists){
        alert("Game Name already exists! Please type different Game Name!");
    } else if(IdAlreadyExists){
        alert("System Id already exists! Please type different System Id!");
    } else if(isEmptyName || isEmptySystemId || isEmptyMaxWLCMain || isEmptyMaxWLCFreegames || isEmptySelectedMathId){
        alert("Field Is Empty! Please Fill all the required fields!")
        if(isEmptyName)
          alert("Game Name")
        else if(isEmptySystemId)
          alert("System Id")
        else if(isEmptyMaxWLCMain)
          alert("Max WLC Main")
        else if(isEmptyMaxWLCFreegames)
          alert("Max WLC Freegames")
        else if(isEmptySelectedMathId)
          alert("Math Id")
    } else{
      try{
        const newGame: IGame = {
          gameName: name,
          gameId: 0,
          systemId: systemId,
          maxWLCMain: maxWLCMain,
          maxWLCFreegames: maxWLCFreegames,
          freegames: freegames,
          gamble: gamble,
          jackpot: jackpot,
          mathId: selectedMathId || 0,
          gameVersion: ['1.0', '1']
        }
        await addGame(newGame);
        console.log("Game added successfully");
        setGame([...game, newGame]);
        setName("");
        setOkState(false);
        setSystemId(0);
        setMaxWLCMain(0);
        setMaxWLCFreegames(0);
        setFreegames(false);
        setGamble(false);
        setJackpot(false);
        setSelectedMathId(0);
      } catch (error) {
        console.error("Error adding game:", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='main'>
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
          value={systemId}
          onChange={(e) => setSystemId(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>Max WLC Main:
        <input 
          type="number"
          value={maxWLCMain}
          onChange={(e) => setMaxWLCMain(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>Max WLC FreeGames:
        <input 
          type="number"
          value={maxWLCFreegames}
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
          value={selectedMathId ? selectedMathId.toString() : ''} 
          onChange={(e) => setSelectedMathId(parseInt(e.target.value))} 
        >
          <option value="">Select Math</option>
          {math.map((mathOption) => (
            <option key={mathOption.mathId} value={mathOption.mathId.toString()}>
              {mathOption.mathName}
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
      {/* <button type="submit" disabled={!selectedMathId}>Submit</button> */}
    </form>
  );
};

export default AddGame;