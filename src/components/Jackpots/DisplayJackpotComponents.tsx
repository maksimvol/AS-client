import React, { useEffect, useState } from "react";
import { IApp, IJackpot } from "../../types/types";
import "../Style/style.css";
import { Link, useParams } from "react-router-dom";
import { getApp } from "../../util_app";

const DisplayJackpotInfo: React.FC<{jackpot: IJackpot}> = ({ jackpot }) => {
    const [appList, setAppList] = useState<IApp[]>([])

    useEffect(() => {
        getApp()
        .then(data => {
            setAppList(data)
        })
        .catch(error => {
          console.log("Error fetching app: ", error);
        })
      },[])
    // let {setId} = useParams()
    // let currentAppId = Number(setId)
    // const currentApp: IApp | undefined | null = appList.find((appV: IApp) => appV.gameSetId === currentAppId)
    return(
        <tr className="table">
            <td>
                <Link to={`/chosenJackpot/${jackpot.jackpotId}`}>
                    {jackpot.jackpotName}
                </Link>
            </td>
            {/* <td>{currentApp?.jackpotVersion.join(' | ')}</td> */}
        </tr>
    );
};

export default DisplayJackpotInfo;