import React from 'react'
import { useNavigate } from 'react-router-dom';       

const Sel1 = () => {
  const navigate = useNavigate();

  const IA = () => {
    navigate('/selv2');
  };

  async function ONLINE() {
    await new Promise((res) => setTimeout(res, 1000)); // Simula un retraso de 1 segundo
    navigate('/');
  }
  return (
    <div>
        <div className='prt'>
            <div className="qur">
            <button onClick={ONLINE} className="variant2">
               ⚔️ ONLINE ⚔️
            </button>
            <button onClick={IA} className="variant1">
                🔥 IA 🔥
            </button>
            </div>
        </div>
    </div>
  )
}

export default Sel1

