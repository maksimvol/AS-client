import GameComponent from '../components/Games/GameComponents';

const Home = () => {
    return (
      <div className='main'>
            <h1>Game Mix</h1>
            <div style={{ display: 'inline-block' }}>
                <GameComponent />
            </div>
        </div>
    );
  };
  
  export default Home;