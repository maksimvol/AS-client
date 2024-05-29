import React, { useEffect, useState } from "react";
import { IMath } from "../types/types";
import { addMath, getMath } from "../util_math";

const AddMath = (): JSX.Element => {   
  const [name, setName] = useState("");
  const [isOk, setOkState] = useState(false);
  const [percentage, setPercentage] = useState<number[]>([]);
  const [percentageSetList, setPercentageSetList] = useState<number[]>([]);

  const [math, setMath] = useState<IMath[]>([])
  const [selectedMath, setSelectedMath] = useState({})

  useEffect(() => {
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
    if (input) {
      setName(input);
      setOkState(true);
    } else {
      setName("");
      setOkState(false);
    }
  }

  function handlePercentage(e: React.ChangeEvent<HTMLInputElement>): void {
    const percentage = e.target.value.split(' ').map(Number).filter(value => !isNaN(value));
    setPercentage(percentage);
  }

  function handlePercentageSetList(e: React.ChangeEvent<HTMLInputElement>): void {
    const percentageSetList = e.target.value.split(' ').map(Number).filter(value => !isNaN(value));
    setPercentageSetList(percentageSetList);
  }

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    const isEmptyName = !name;
    const isEmptyPercentage = percentage.length === 0;
    const isEmptyPercentageSetList = percentageSetList.length === 0
    const NameAlreadyExists = math.find((e) => e.mathName === name);

    if (NameAlreadyExists) {
      alert("Game Name already exists! Please type a different Game Name!");
    } else if (isEmptyName || isEmptyPercentage || isEmptyPercentageSetList) {
      alert("Field is empty! Please fill all the required fields!");
      if(isEmptyName){
        alert("Math Name")
      } else if(isEmptyPercentage){
          alert("Percentage ")
      } else if(isEmptyPercentageSetList){
          alert("Percentage Set List")
      }
      } else{
        try {
          const newMath: IMath = {
            mathName: name,
            mathId: 0,
            percentage: percentage,
            percentageSetList: percentageSetList
          };
          await addMath(newMath);
          console.log("Math added successfully");
          setMath([...math, newMath]);
          setName("");
          setOkState(false);
          setPercentage([]);
          setPercentageSetList([]);
        } catch (error) {
          console.error("Error adding math:", error);
        }
      }
    }
  return (
    <form onSubmit={handleSubmit} className="main">
      <h1>Add Math</h1>
      <label>
        Math Name:
        <input className={isOk ? "default" : "error"}
          type="text"
          value={name}
          onChange={(e) => checkCompatibility(e)}
        />
      </label>
      <br />
      <label>
        Percentage <strong>(separate with space)</strong>:
        <input type="text" 
        value={percentage.join(' ')}
        onChange={(e) => handlePercentage(e)} />
      </label>
      <br />
      <label>
        Percentage Set List <strong>(separate with space)</strong>:
        <input type="text" 
        value={percentageSetList.join(' ')}
        onChange={(e) => handlePercentageSetList(e)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMath;
