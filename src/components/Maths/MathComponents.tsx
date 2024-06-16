import React, { useEffect, useState } from "react";
import { IMath } from "../../types/types";
import { getMath } from "../../util_math";
import MathHeaders from "./MathHeaders";
import DisplayMathInfo from "./DisplayMathComponents";

const MathComponent: React.FC = () => {
    const [mathList, setMathList] = useState<IMath[]>([])
    const [sortByName, setSortByName] = useState<boolean>(false);
    const mathValues = Object.values(mathList);

    useEffect(() => {
        getMath()
        .then(mathData => {
            if (sortByName) {
                mathData.sort((a: IMath, b: IMath) => a.mathName.localeCompare(b.mathName));
            }
            setMathList(mathData)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[sortByName])

    const nameSort = () => {
        setSortByName(prev => !prev);
    };

    return(
        <>
        <button className="button" onClick={nameSort}>Sort by Name</button><br />
        <br />
        <table>
            <thead>
                <MathHeaders />
            </thead>
            <tbody>
                {mathValues.map((math: any, index) => (
                    <DisplayMathInfo key={"math" + index} math={math} />
                ))}
            </tbody>
        </table>
    </>
    );
};
export default MathComponent;