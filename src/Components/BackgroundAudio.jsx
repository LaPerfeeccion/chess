import { useEffect, useRef } from 'react';
import audiofile from '../assets/Audio/audio1.mp3';

const BackgroundAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const tryPlay = () => {
      if (audio) {
        audio.volume = 0.5;
        audio.play().catch((err) => {
          console.warn('No se pudo reproducir automáticamente:', err);
        });
      }
    };

    window.addEventListener('click', tryPlay, { once: true });

    return () => {
      window.removeEventListener('click', tryPlay);
    };
  }, []);

  return (
  <audio ref={audioRef} src={audiofile} loop autoPlay />
);
};

export default BackgroundAudio;