import React, { useEffect, useState } from "react";
import DisplayJackpotInfo from "./DisplayJackpotComponents";
import JackpotHeaders from "./JackpotHeaders";
import { IApp, IJackpot } from "../../types/types";
import { getJackpot } from "../../util_jackpot";
import { getApp } from "../../util_app";

const JackpotComponent: React.FC = () => {
    const [jackpotList, setJackpotList] = useState<IJackpot[]>([])
    const [appList, setAppList] = useState<IApp[]>([])
    const jackpotValues = Object.values(jackpotList);

    useEffect(() => {
        getJackpot()
        .then(data => {
            setJackpotList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })

        getApp()
        .then(data => {
            setAppList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])

    return (
        
        <table>
            <thead>
                <JackpotHeaders />
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
