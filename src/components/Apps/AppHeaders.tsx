import { IApp } from "../../types/types";

const AppHeaders: React.FC<{ app: IApp[] }> = ({ app }) => {
    return(
        <tr className="table">
            {app.map((app, index) => (
                <th key={index}>{app.appName}</th>
            ))}
        </tr>
    )
}
export default AppHeaders;