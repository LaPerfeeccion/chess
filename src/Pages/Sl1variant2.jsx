import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sl1v2 = () => {
  const navigate = useNavigate();

  const EASY = () => {
    navigate('/Game');
  };

  async function HARD() {
    await new Promise((res) => setTimeout(res, 1000)); // Simula un retraso de 1 segundo
    navigate('/GameHard');
  }
  return (
    <div>
      <div className="prt">
        <div className="qur">
          <button onClick={EASY} className="variant2">
            ☺️ 
          </button>
          <button onClick={HARD} className="variant1">
            💀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sl1v2;
