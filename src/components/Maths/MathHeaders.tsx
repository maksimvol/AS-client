import { IMath } from "../../types/types";

const MathHeaders: React.FC<{ math: IMath[] }> = ({ math }) => {
    return(
        <tr className="table">
            <th>Math Name</th>
            <th>Math Id</th>
            <th>Percentage</th>
            <th>Percentage Set List</th>
        </tr>
    )
}
export default MathHeaders;