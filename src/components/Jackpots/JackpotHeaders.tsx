import { IJackpot } from "../../types/types";
const JackpotHeaders = () => {
    return(
        <tr className="table">
            <th>Jackpot Name</th>
            <th>Jackpot Type</th>
            <th>Percentage Set List</th>
            {/* <th>Jackpot Version | Commit</th> */}
        </tr>
    )
}
export default JackpotHeaders;