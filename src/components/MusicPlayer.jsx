import { useEffect, useRef, useState } from 'react';
import { wedding } from '../config.js';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const startAppliedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = 0.5;

    const applyStartAt = () => {
      if (startAppliedRef.current) return;
      if (typeof wedding.music.startAt !== 'number') return;

      const duration = Number.isFinite(a.duration) ? a.duration : null;
      const target = duration ? Math.min(wedding.music.startAt, Math.max(duration - 0.25, 0)) : wedding.music.startAt;

      a.currentTime = Math.max(target, 0);
      startAppliedRef.current = true;
    };

    const tryPlay = async () => {
      try {
        applyStartAt();
        await a.play();
        setPlaying(true);
      } catch (e) {
        setPlaying(false);
        console.warn('Audio blocked:', e);
      }
    };

    const handleLoadedMetadata = () => {
      applyStartAt();
      tryPlay();
    };

    if (a.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      a.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
    }

    const unlock = () => {
      if (!audioRef.current || !audioRef.current.paused) return;
      tryPlay();
    };

    window.addEventListener('pointerdown', unlock, { once: true });
    return () => {
      a.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('pointerdown', unlock);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        if (!startAppliedRef.current && typeof wedding.music.startAt === 'number') {
          a.currentTime = Math.max(wedding.music.startAt, 0);
          startAppliedRef.current = true;
        }
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
