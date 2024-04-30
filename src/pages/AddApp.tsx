import React, { useState } from "react";
import { IApp } from "../types/types";
import { games } from "../components/Data/Games";
import { app } from "../components/Data/Apps";

const AddApp = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [selectedJackpotId, setSelectedJackpotId] = useState(0);
  const [region, setRegion] = useState<string[]>([]);
  const [interfaceName, setInterface] = useState("");
  const [selectedGameId, setSelectedGameId] = useState(Number);

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
    setRegion(regions);
  }

  function handleInterfaceChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInterface(e.target.value);
  }

  function handleSubmit(e: any): void {
    e.preventDefault();
    const NameAlreadyExists = app.find((e)=>e.appName === name);

    const isEmptyName = !name;
    const isEmptyRegion = region.length === 0;
    const isEmptyInterface = !interfaceName;

    if(NameAlreadyExists){
        alert("Game Name already exists! Please type different Game Name!");
    } else if(isEmptyName || isEmptyRegion || isEmptyInterface){
        alert("Field Is Empty! Please Fill all the required fields!")
        if(isEmptyName)
            alert("App Name")
        else if(isEmptyRegion)
            alert("Region")
        else if(isEmptyInterface)
            alert("Interface")
    } else{
      const newApp: IApp = {
        appName: name,
        gameSetId: app.length + 1, 
        jackpotId: selectedJackpotId,
        jackpotVersion: ['1.0', '1'],
        region: region,
        interface: interfaceName,
        gameList: [
            {
                gameId: selectedGameId,
                gameVersion: ['1.0', '1']
            }
        ]
      }
      app.push(newApp);
      console.log(app);
      setName("");
      setOkState(false);
      setSelectedJackpotId(0);
      setRegion([]);
      setInterface("");
      setSelectedGameId(0);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
          value={region.join(' ')}
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
      <p><strong>add options to choose from existing games</strong></p>
        <input 
          value={selectedGameId}
          onChange={(e) => setSelectedGameId(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddApp;