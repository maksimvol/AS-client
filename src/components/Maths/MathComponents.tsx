import React from "react";
import { IMath } from "../../types/types";
import DisplayMathInfo from "./DisplayMathComponents";

const MathComponent: React.FC = () => {
    const math: IMath = {
        mathId: 1,
        mathName: 'testMath',
        percentage: [1],
        percentageSetList: [1, 2, 3]
    };
    return(
    <div>
        <h1>Math Information</h1>
        <DisplayMathInfo math={math} />
    </div>
    );
};
export default MathComponent;