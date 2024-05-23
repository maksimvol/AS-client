import React, { useState, useEffect } from "react";
import { IApp, IGame } from "../types/types";
import { games } from "../components/Data/Games";
import { app } from "../components/Data/Apps";
import { addApp, getApp } from "../util_app";
import { getGame } from "../util_game";
// import AOS from "aos"

const AddApp = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [selectedJackpotId, setSelectedJackpotId] = useState(0);
  const [region, setRegion] = useState<string>("");
  const [interfaceName, setInterface] = useState("");
  const [selectedGameId, setSelectedGameId] = useState(Number);
  const [selectedGameVersion, setSelectedGameVersion] = useState<[string, string]>(["", ""]);

  const [app, setApp] = useState<IApp[]>([])
  const [game, setGame] = useState<IGame[]>([])

  useEffect(() => {
    getApp()
    .then(data => {
      setApp(data)      
    })
    .catch(error => {
      console.log("Error fetching app: ", error);
    })

    getGame()
    .then(data => {
      setGame(data)      
    })
    .catch(error => {
      console.log("Error fetching app: ", error);
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

  function handleRegionChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const regions = e.target.value.split(' ');
    setRegion(e.target.value);
  }

  function handleInterfaceChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInterface(e.target.value);
  }

  function handleGameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const gameId = parseInt(e.target.value);
    setSelectedGameId(gameId);
  
    const selectedGame = games.find(game => game.gameId === gameId);
    if (selectedGame) {
      setSelectedGameVersion(selectedGame.gameVersion);
    } else {
      setSelectedGameVersion(['1.0', '1']);
    }
  }

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();
    const NameAlreadyExists = app.find((e)=>e.appName === name);

    const isEmptyName = !name;
    const isEmptyRegion = region.length === 0;
    const isEmptyInterface = !interfaceName;

    if(NameAlreadyExists){
        alert("App Name already exists! Please type different App Name!");
    } else if(isEmptyName || isEmptyRegion || isEmptyInterface){
        alert("Field Is Empty! Please Fill all the required fields!")
        if(isEmptyName)
            alert("App Name")
        else if(isEmptyRegion)
            alert("Region")
        else if(isEmptyInterface)
            alert("Interface")
    } else{
      try{
 
        const newApp: IApp = {
          appName: name,
          gameSetId: 0, 
          jackpotId: selectedJackpotId,
          jackpotVersion: ['1.0', '1'],
          region: region,
          interface: interfaceName,
          gameList: [
              {
                  gameId: selectedGameId,
                  gameVersion: selectedGameVersion 
              }
          ]
        }
        await addApp(newApp);
        console.log("App added successfully");
        setApp([...app, newApp]);
        setName("");
        setOkState(false);
        setSelectedJackpotId(0);
        setRegion("");
        setInterface("");
        setSelectedGameId(0);
      } catch (error) {
        console.error("Error adding app:", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='main'>
      <h1>Add App</h1>
      <label>App Name:
        <input className={isOk ? "default" : "error"}
          type="text" 
          value={name}
          onChange={(e) => checkCompatibility(e)}
        />
      </label>
      <br />
      <label>
        Game Set Id: 
        <input
          type="number"
          value={games.length + 1}
          disabled
        />
      </label>
      <br />
      <label>Jackpot Id:
        <input 
          value={selectedJackpotId}
          onChange={(e) => setSelectedJackpotId(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>Region:
        <input 
          type="text" 
          value={region}
          onChange={(e) => handleRegionChange(e)}
        />
      </label>
      <br />
      <label>Interface:
        <input 
          type="text" 
          value={interfaceName}
          onChange={(e) => handleInterfaceChange(e)}
        />
      </label>
      <br />
      <label>Game List:
        <select
          value={selectedGameId ? selectedGameId.toString() : ''} 
          onChange={(e) => setSelectedGameId(parseInt(e.target.value))} 
        >
          <option value="">Select Game</option>
          {game.map((gameOption) => (
            <option key={gameOption.gameId} value={gameOption.gameId.toString()}>
              {gameOption.gameName}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddApp;