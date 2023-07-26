// import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Watchlist from './Pages/Watchlist';

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Signup from './Pages/Signup';
import Preferences from './Pages/Preferences';
import Recommend from './Pages/Recommend';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<Watchlist />} />
        <Route path="/Preferences" element={<Preferences />} />
        <Route path="/Recommend" element={<Recommend />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
