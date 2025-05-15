import React from "react";
import "./Lobby.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import audiofile from "/src/assets/Audio/audio1.mp3"; // ✅ Corregido

const Lobby = () => {
  const navigate = useNavigate();

  const Rules = () => {
    navigate("/Rules");
  };

  return (
    <div className="LBP">
      <h1 className="xd">Welcome to Lobby</h1>

      <button className="Bt1" onClick={Rules}>
        Jugar
      </button>

      {/* ✅ Agregar source y controles para debuggear */}
      <audio autoPlay loop >
        <source src={audiofile} type="audio/mp3" />
        Tu navegador no soporta el audio.
      </audio>
    </div>
  );
};

export default Lobby;
