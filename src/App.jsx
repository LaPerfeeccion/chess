import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lobby from './Pages/Lobby';
import './App.css';
import Rules from './Pages/Rules';
import Game from './Pages/Game';
import BackgroundAudio from './Components/BackgroundAudio';

const App = () => {
  return (
    <BrowserRouter>
      <BackgroundAudio />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
