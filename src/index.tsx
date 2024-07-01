import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

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

import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="login" element={<Login setUser={setUser}/>} />

            <Route path="addGame" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <AddGame />
                </ProtectedRoute>
              } 
            />
            <Route path="addApp" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <AddApp />
                </ProtectedRoute>
              } 
            />
            <Route path="addJackpot" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <AddJackpot />
                </ProtectedRoute>
              } 
            />
            <Route path="addMath" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <AddMath />
                </ProtectedRoute>
              } 
            />

            <Route path="chosenApp/:setId" element={
                <ProtectedRoute user={user} allowedRoles={['admin', 'user']}>
                  <ChosenApp user={user}/>
                </ProtectedRoute>
              } 
            />
            <Route path="chosenAppUpdate/:setId" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <UpdateApp/>
                </ProtectedRoute>
              } 
            />

            <Route path="chosenGame/:gameId" element={
                <ProtectedRoute user={user} allowedRoles={['admin', 'user']}>
                  <ChosenGame user={user}/>
                </ProtectedRoute>
                } 
              />
            <Route path="chosenGameUpdate/:gameId" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <UpdateGame/>
                </ProtectedRoute>
              } 
            />

            <Route path="chosenMath/:mathId" element={
                <ProtectedRoute user={user} allowedRoles={['admin', 'user']}>
                  <ChosenMath user={user}/>
                </ProtectedRoute>
              } 
            />
            <Route path="chosenMathUpdate/:mathId" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <UpdateMath/>
                </ProtectedRoute>
              } 
            />

            <Route path="chosenJackpot/:jackpotId" element={
                <ProtectedRoute user={user} allowedRoles={['admin', 'user']}>
                  <ChosenJackpot user={user}/>
                </ProtectedRoute>
              } 
            />
            <Route path="chosenJackpotUpdate/:jackpotId" element={
                <ProtectedRoute user={user} allowedRoles={['admin']}>
                  <UpdateJackpot/>
                </ProtectedRoute>
              } 
            />

            <Route path="contacts" element={<Contacts />} />
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