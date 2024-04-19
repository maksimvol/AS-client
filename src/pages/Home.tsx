import GameComponent from '../components/Games/GameComponents';

const Home = () => {
    return (
      <div>
            <h1>Game Mix</h1>
            <div style={{ display: 'inline-block' }}>
                <GameComponent />
            </div>
            <p><strong>NOTE: GAME SHOULD HAVE gameId and systemId - gameId is adding automatically, systemId - with hands</strong></p>
        </div>
    );
  };
  
  export default Home;