import React, { useEffect, useState } from "react";
import DisplayJackpotInfo from "./DisplayJackpotComponents";
import JackpotHeaders from "./JackpotHeaders";
import { IJackpot } from "../../types/types";
import { getJackpot } from "../../util_jackpot";

const JackpotComponent: React.FC = () => {
    const [jackpotList, setJackpotList] = useState<IJackpot[]>([])
    // Convert jackpots object to array
    const jackpotValues = Object.values(jackpotList);

    useEffect(() => {
        getJackpot()
        .then(data => {
            setJackpotList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])

    return (
        <table>
            <thead>
                <JackpotHeaders jackpots={jackpotList} />
            </thead>
            <tbody>
                {jackpotValues.map((jackpot: any, index) => (
                    <DisplayJackpotInfo key={"jackpot" + index} jackpot={jackpot} />
                ))}
            </tbody>
        </table>
    );
};

export default JackpotComponent;
