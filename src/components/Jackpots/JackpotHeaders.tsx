import { IJackpot } from "../../types/types";
const JackpotHeaders: React.FC<{ jackpots: IJackpot[] }> = ({ jackpots }) => {
    return(
        <tr className="table">
            <th>Jackpot Name</th>
            {/* <th>Jackpot Version | Commit</th> */}
        </tr>
    )
}
export default JackpotHeaders;