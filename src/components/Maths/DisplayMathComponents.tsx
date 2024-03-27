import React from "react";
import { Math } from "../../types/types";

const DisplayMathInfo: React.FC<{math: Math}> = ({ math }) => {
    return(
        <div>
            <h2>Math Information</h2>
            <p>Math ID: {math.mathId}</p>
            <p>Math Name: {math.mathName}</p>
            <p>Math Percentage: {math.percentage}</p>
            <p>Math Percentage Set List: [{math.percentageSetList.join(', ')}]</p>
        </div>
    );
};

export default DisplayMathInfo;