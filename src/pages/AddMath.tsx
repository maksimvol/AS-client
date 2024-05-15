import React, { useState } from "react";
import { IMath } from "../types/types";
import { games } from "../components/Data/Games";
import { jackpots } from "../components/Data/Jackpots";
import { gameMath } from "../components/Data/Math";

const AddMath = () : JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [percentage, setPercentage] = useState<number[]>([]);
  const [percentageSetList, setPercentageSetList] = useState<number[]>([]);

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

  function handlePercentage(e: React.ChangeEvent<HTMLInputElement>): void {
    const percentage = e.target.value.split(' ').map(Number);
    setPercentage(percentage);
  }
  function handlePercentageSetList(e: React.ChangeEvent<HTMLInputElement>): void {
    const percentageSetList = e.target.value.split(' ').map(Number);
    setPercentageSetList(percentageSetList);
  }

  function handleSubmit(e: any): void {
    e.preventDefault();
    const NameAlreadyExists = gameMath.find((e)=>e.mathName === name);

    const isEmptyName = !name;
    const isEmptyPercentage = !percentage;
    const isEmptyPercentageSetList = !percentageSetList;

    if(NameAlreadyExists){
        alert("Game Name already exists! Please type different Game Name!");
    } else if(isEmptyName || isEmptyPercentage || isEmptyPercentageSetList){
        alert("Field Is Empty! Please Fill all the required fields!")
        if(isEmptyName)
          alert("Math Name")
        else if(isEmptyPercentage)
          alert("Percentage")
        else if(isEmptyPercentageSetList)
          alert("Percentage Set List")
    } else{
      const newMath: IMath = {
        mathName: name,
        mathId: gameMath.length + 1, 
        percentage: percentage,
        percentageSetList: percentageSetList,
      }
      gameMath.push(newMath);
      console.log(gameMath);
      setName("");
      setOkState(false);
      setPercentage([]);
      setPercentageSetList([]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='main'>
      <label>Math Name:
        <input className={isOk ? "default" : "error"}
          type="text" 
          value={name}
          onChange={(e) => checkCompatibility(e)}
        />
      </label>
      <br />
      <label>
        Math Id: 
        <input
          type="number"
          value={jackpots.length + 1}
          disabled
        />
      </label>
      <br />
      <label>
        Percentage <strong>(separate with space)</strong>: 
        <input
          type="text"
          onChange={(e) => handlePercentage(e)}
        />
      </label>
      <br />
      <label>Percentage Set List <strong>(separate with space)</strong>:
        <input 
          type="text"
          onChange={(e) => handlePercentageSetList(e)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMath;