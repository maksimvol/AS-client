import DisplayJackpotInfo from "./DisplayJackpotComponents";
import JackpotHeaders from "./JackpotHeaders";
import { jackpots } from "../Data/Jackpots";

const JackpotComponent: React.FC = () => {
    

    // const JackpotComponents = jackpots.map((jackpot, index) => (
    //     <DisplayJackpotInfo key={"jackpot"+index} jackpot={jackpot} />
    // ));

    return (
        <table>
            <thead>
                <JackpotHeaders jackpots={jackpots} />
            </thead>
            <tbody>
                {
                    Object.values(jackpots).map((jackpot, index) => (
                        <DisplayJackpotInfo key={"jackpot"+index} jackpot={jackpot} />
                    ))
                }
            </tbody>
        </table>
    );
};
export default JackpotComponent;