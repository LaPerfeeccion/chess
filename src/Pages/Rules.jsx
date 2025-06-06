import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cardp from '../Components/cardp';
import './Rules.css';

const Rules = () => {
  const [progress, setProgress] = useState(0);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space" && !isSpacePressed) {
        setIsSpacePressed(true);
      }
    };
    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        setIsSpacePressed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isSpacePressed]);

  useEffect(() => {
    // Progreso animado al presionar barra espaciadora 
    if (isSpacePressed && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 0.5 : 100));
      }, 20);
      return () => clearInterval(interval);
    } else if (!isSpacePressed && progress > 0) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 0.5 : 0));
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isSpacePressed, progress]);

  useEffect(() => {
    // Aplica el filtro de blur y brillo a la clase .prin
    const maxBlur = 2;
    const minBlur = 0;
    const maxBrightness = 6;
    const minBrightness = 1;
    const blurValue = minBlur + (progress / 100) * maxBlur;
    const brightnessValue = minBrightness + (progress / 100) * (maxBrightness - minBrightness);
    const el = document.querySelector('.prin');
    if (el) {
      el.style.filter = `blur(${blurValue}px) brightness(${brightnessValue})`;
      el.style.transition = "filter 0.3s";
    }
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        navigate("/Game");
      }, 500); 
    }
  }, [progress, navigate]);

  return (
    <div className='prin'>
      <Cardp />
      <div className="rules-barra-space">
        <div className="rules-barra-progress" style={{ width: `${progress}%` }}>
          {progress > 0 && "Presiona SPACEBAR"}
        </div>
      </div>
    </div>
  );
};

export default Rules;