import React from 'react';
import './App.css';
import GameComponent from './components/Games/GameComponents';
import JackpotComponent from './components/Jackpots/JackpotComponents';
// import UserComponent from './components/Users/UserComponents';
// import AppComponent from './components/Apps/AppComponents';
// import MathComponent from './components/Maths/MathComponents';

function App() {
  return (
    <div className='App'>
      <GameComponent/>
      <JackpotComponent/>
      {/* <UserComponent/> */}
      {/* <AppComponent/> */}
      {/* <MathComponent/> */}
    </div>
  );
}

export default App;