import React, { useState } from 'react';
import './Lobby.css';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showText, setShowText] = useState(false);

  const Rules = async () => {
    setStartAnimation(true); // Inicia animaciones
    setLoading(true);

    // Mostramos el texto tras 2 segundos
    setTimeout(() => {
      setShowText(true);
    }, 3300); // puedes ajustar el tiempo

    // Después de todo, navegamos
    await new Promise((res) => setTimeout(res, 10000));
    setLoading(false);
    navigate('/Rules');
  };

  return (
    <div className="LBP">
      <div className={`background ${startAnimation ? 'zoomed' : ''}`}></div>
      <div className={`overlay ${startAnimation ? 'fade-out' : ''}`}></div>

      {showText && (
        <h1
          className="animated-text "
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '2.5rem',
            letterSpacing: '0.04em',
            color: '#bfa14a', // dorado elegante
            textShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          Welcome to Lobby
        </h1>
      )}

      <button className={`Bt1${startAnimation ? ' cambi' : ''}`} onClick={Rules}>
        ⚔️
      </button>
    </div>
  );
};

export default Lobby;
