import { Jackpot } from "../../types/types";
import DisplayJackpotInfo from "./DisplayJackpotComponents";

const JackpotComponent: React.FC = () => {
    const jackpots: Jackpot[] = [{
        jackpotId: 1,
        jackpotName: 'testJackpot1',
        jackpotType: ['testType'],
        percentageSetList: [1, 2, 3],
        version: ['1.0','1']
    },
    {
        jackpotId: 2,
        jackpotName: 'testJackpot2',
        jackpotType: ['testType'],
        percentageSetList: [1, 2, 3],
        version: ['1.0','1']
    }
    ];

    const JackpotComponents = [];

    for(let i = 0; i < jackpots.length; i++){
        const jackpot = jackpots[i]
        JackpotComponents.push(
            <div key={i}>
                <h1>Jackpot {i + 1} Information</h1>
                <DisplayJackpotInfo jackpot={jackpot} />
            </div>)
    }

    return(
        <div>
            {JackpotComponents}
        </div>
    )
};
export default JackpotComponent;