import { Button } from '@heroui/button';
import { useNavigate } from 'react-router-dom';
import './Modes.css';

const Modes = () => {
  const navigate = useNavigate();

  const goToV1 = () => {
    navigate('/Especial');
  };

  async function goToV2() {
    await new Promise((res) => setTimeout(res, 1000)); // Simula un retraso de 1 segundo
    navigate('/Ruleserror');
  }

  return (
    <div className="prt">
      <div className="qur">
        <div className="marco">
          <button onClick={goToV2} className="variant2">
            Especial
          </button>
          <button onClick={goToV1} className="variant1">
            Clasico
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modes;
