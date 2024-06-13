import React, { useEffect, useState } from "react";
import { IMath } from "../../types/types";
import { getMath } from "../../util_math";
import MathHeaders from "./MathHeaders";
import DisplayMathInfo from "./DisplayMathComponents";

const MathComponent: React.FC = () => {
    const [mathList, setMathList] = useState<IMath[]>([])
    const mathValues = Object.values(mathList);

    useEffect(() => {
        getMath()
        .then(data => {
            setMathList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])

    return(
     <table>
            <thead>
                <MathHeaders math={mathList} />
            </thead>
            <tbody>
                {mathValues.map((math: any, index) => (
                    <DisplayMathInfo key={"math" + index} math={math} />
                ))}
            </tbody>
        </table>
    );
};
export default MathComponent;