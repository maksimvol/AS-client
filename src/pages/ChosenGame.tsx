
import GameChosenComponent from '../components/Games/GameChosenComponent';

const ChosenGame = () => {
    
    return (
      <div>
            <h1>Chosen Game Info</h1>
            <div style={{ display: 'inline-block' }}>
                <GameChosenComponent />
            </div>
        </div>
    );
  };
  
  export default ChosenGame;