import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import ChosenApp from './pages/ChosenApp';
import ChosenGame from './pages/ChosenGame';
import AddApp from './pages/AddApp';
import UpdateApp from './pages/UpdateApp';
import AddJackpot from './pages/AddJackpot';
import AddMath from './pages/AddMath';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UpdateGame from './pages/UpdateGame';


export default function App() {
  return (
    <Router>
      {/* <div className='app-box'> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="addGame" element={<AddGame />} />
            <Route path="addApp" element={<AddApp />} />
            <Route path="addJackpot" element={<AddJackpot />} />
            <Route path="addMath" element={<AddMath />} />
            <Route path="contact" element={<Contact />} />
            <Route path="chosenApp/:setId" element={<ChosenApp/>} />
            <Route path="chosenAppUpdate/:setId" element={<UpdateApp/>} />
            <Route path="chosenGame/:gameId" element={<ChosenGame/>} />
            <Route path="chosenGameUpdate/:gameId" element={<UpdateGame/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
        <Footer />
      {/* </div> */}
    </Router>
  );
};

let container= document.getElementById('root')
let root = createRoot(container!);
root.render(<App />);