import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

function Lightbox({ photos, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-5 text-white/70 hover:text-white text-3xl z-10">×</button>
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">{current + 1} / {photos.length}</p>
      <AnimatePresence mode="sync">
        <motion.img key={current} variants={variants} initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={`/albums/${photos[current]}`} alt=""
          className="max-h-[85svh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()} />
      </AnimatePresence>
      {photos.length > 1 && <>
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 text-white/60 hover:text-white text-4xl px-2 py-4">‹</button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 text-white/60 hover:text-white text-4xl px-2 py-4">›</button>
      </>}
    </motion.div>
  );
}

export default function Gallery() {
  const { t } = useLang();
  const tr = t.gallery;
  const photos = wedding.gallery;
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  if (!photos || photos.length === 0) return null;

  const go = (step) => { setDir(step); setIndex((i) => (i + step + photos.length) % photos.length); };

  return (
    <>
      <section className="section">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading">
          {tr.heading}
        </motion.h2>
        <p className="mt-2 text-sm italic text-mocha/80 font-serif">{tr.subtitle}</p>
        <div className="divider" />

        <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-mocha/10">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
            <AnimatePresence mode="sync">
              <motion.img key={index} variants={variants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                src={`/albums/${photos[index]}`} alt={`Photo ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                onClick={() => setLightboxIndex(index)}
                draggable={false} />
            </AnimatePresence>
          </div>
          <button onClick={() => go(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition backdrop-blur-sm">‹</button>
          <button onClick={() => go(1)}  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition backdrop-blur-sm">›</button>
          <div className="absolute bottom-3 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{index + 1} / {photos.length}</div>
        </div>

        <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
          {photos.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-5 h-2 bg-gold' : 'w-2 h-2 bg-gold/30 hover:bg-gold/60'}`} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && <Lightbox photos={photos} index={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
      </AnimatePresence>
    </>
  );
}
