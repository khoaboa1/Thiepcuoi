import { useEffect, useRef, useState } from 'react';
import { wedding } from '../config.js';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = 0.5;

    const tryPlay = async () => {
      try {
        await a.play();
        setPlaying(true);
      } catch (e) {
        setPlaying(false);
        console.warn('Audio blocked:', e);
      }
    };

    tryPlay();

    const unlock = () => {
      if (!audioRef.current || !audioRef.current.paused) return;
      tryPlay();
    };

    window.addEventListener('pointerdown', unlock, { once: true });
    return () => window.removeEventListener('pointerdown', unlock);
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch (e) {
        console.warn('Audio blocked:', e);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={wedding.music.src} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Tắt nhạc' : 'Bật nhạc'}
        title={wedding.music.title}
        className="fixed top-4 right-4 z-50 h-11 w-11 rounded-full bg-white/80 backdrop-blur border border-gold/30 shadow-md flex items-center justify-center hover:bg-gold hover:text-white transition"
      >
        <span className={playing ? 'animate-spin-slow' : ''} style={{ animation: playing ? 'spin 4s linear infinite' : 'none' }}>
          {playing ? '♫' : '♪'}
        </span>
      </button>
    </>
  );
}
