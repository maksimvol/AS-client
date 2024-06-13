import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IMath } from "../../types/types";
import { CompoundTableHeaders } from "../Data/Headers";
import { deleteMathById, getMath } from "../../util_math";
import MathHeaders from "../Maths/MathHeaders";
import DisplayMathInfo from "./DisplayMathComponents";

const MathChosenComponent: React.FC = () => {
    const [mathList, setMathList] = useState<IMath[]>([])

    const navigate = useNavigate(); 

    useEffect(() => {
        getMath()
        .then(data => {
            setMathList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])

    let {mathId} = useParams()
    let currentMathId = Number(mathId)
    const currentMath: IMath | undefined | null = mathList.find((mathV: IMath) => mathV.mathId === currentMathId)

    async function handleDelete() {
        try{
            await deleteMathById(currentMathId);
            navigate('/')
            navigate(0)
        } catch(error) {
            console.log("Error deleting app: ", error);
        }
    }
    
    if (!currentMath) return <></>;

    let headerValue = Object(CompoundTableHeaders);

    mathList.forEach((mathList)=>{
        let v  = mathList.mathName;
        let n = 'math'+mathList.mathId;
        headerValue[n] = [v, mathList.mathId];
    })

    return(
        <div className="main">
            <h2>Math Info</h2>
            <table>
                <thead>
                    <MathHeaders key={'MathHeaders'} math={headerValue}/>
                </thead>
                <tbody>
                    <DisplayMathInfo math={currentMath} />
                </tbody>
            </table>
            <br />
            <Link className="button" to={`/chosenMathUpdate/${currentMathId}`}>
                Update {currentMath.mathName} Game
            </Link>
            <button type="button" className="buttonDelete" onClick={handleDelete}>Delete {currentMath.mathName} Game</button>
        </div>
    );
};
export default MathChosenComponent;