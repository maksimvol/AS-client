import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NoPage from './pages/NoPage';

import AddApp from './pages/AddApp';
import AddGame from './pages/AddGame';
import AddJackpot from './pages/AddJackpot';
import AddMath from './pages/AddMath';

import UpdateApp from './pages/UpdateApp';
import UpdateGame from './pages/UpdateGame';
import UpdateMath from './pages/UpdateMath';
import UpdateJackpot from './pages/UpdateJackpot';

import ChosenApp from './pages/ChosenApp';
import ChosenGame from './pages/ChosenGame';
import ChosenMath from './pages/ChosenMath';
import ChosenJackpot from './pages/ChosenJackpot';

import Footer from './components/Footer';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="addGame" element={<AddGame />} />
            <Route path="addApp" element={<AddApp />} />
            <Route path="addJackpot" element={<AddJackpot />} />
            <Route path="addMath" element={<AddMath />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="chosenApp/:setId" element={<ChosenApp/>} />
            <Route path="chosenAppUpdate/:setId" element={<UpdateApp/>} />
            <Route path="chosenGame/:gameId" element={<ChosenGame/>} />
            <Route path="chosenGameUpdate/:gameId" element={<UpdateGame/>} />
            <Route path="chosenMath/:mathId" element={<ChosenMath/>} />
            <Route path="chosenMathUpdate/:mathId" element={<UpdateMath/>} />
            <Route path="chosenJackpot/:jackpotId" element={<ChosenJackpot/>} />
            <Route path="chosenJackpotUpdate/:jackpotId" element={<UpdateJackpot/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
        <Footer />
    </Router>
  );
};

let container= document.getElementById('root')
let root = createRoot(container!);
root.render(<App />);