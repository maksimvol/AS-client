import { IJackpot } from "../../types/types";
const JackpotHeaders: React.FC<{ jackpots: IJackpot[] }> = ({ jackpots }) => {
    return(
        <tr className="table">
            {/* {jackpots.map((jackpot, index) => (
                <th key={index}>{jackpot.jackpotName}</th>
            ))} */}
            <th>Jackpot Name</th>
            <th>Jackpot Version | Commit</th>
        </tr>
    )
}
export default JackpotHeaders;