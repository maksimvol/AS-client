import { IJackpot } from "../../types/types";
const JackpotHeaders: React.FC<{ jackpots: IJackpot[] }> = ({ jackpots }) => {
    return(
        <tr className="table">
            {jackpots.map((jackpot, index) => (
                <th key={index}>{jackpot.jackpotName}</th>
            ))}
        </tr>
    )
}
export default JackpotHeaders;