import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lobby from './Pages/Lobby';
import './App.css';
import Rules from './Pages/Rules';
import Game from './Pages/Game';
import BackgroundAudio from './Components/BackgroundAudio';
import Modes from './Pages/Modes';
import GameIA from './Pages/GameIA';
import Sel1 from './Pages/Sel1';
import Sl1v2 from './Pages/Sl1variant2';


const App = () => {
  return (
    <BrowserRouter>
      <BackgroundAudio />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/modes" element={<Modes />} />
        <Route path="/Especial" element={<Sel1 />} />
        <Route path="/selv2" element={<Sl1v2 />} />
        <Route path="/Rulesv1" element={<Rules />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/GameHard" element={<GameIA />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
