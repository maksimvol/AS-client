import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import GameSet from './pages/GameSet';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addGame" element={<AddGame />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gameSet/:setId" element={<GameSet/>} />
        </Route>
      </Routes>
    </Router>
  );
};

let container= document.getElementById('root')
let root = createRoot(container!);
root.render(<App />);