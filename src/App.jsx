import { BrowserRouter as Router, Route, Routes, Form, BrowserRouter } from "react-router-dom";
import Lobby from "./Pages/Lobby";
import "./App.css"
import Rules from "./Pages/Rules";
import Game from "./Pages/Game";





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Lobby} />
        <Route path="/Rules" Component={Rules} />
        <Route path="/Game" Component={Game} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;