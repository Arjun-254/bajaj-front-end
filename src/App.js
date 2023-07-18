// import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import Watchlist from './Pages/Watchlist';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/Dashboard" element={<Watchlist />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
