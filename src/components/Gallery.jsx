import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../config.js';

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Gallery() {
  const photos = wedding.gallery;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  if (!photos || photos.length === 0) return null;

  const go = (step) => {
    setDir(step);
    setIndex((i) => (i + step + photos.length) % photos.length);
  };

  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        Album ảnh
      </motion.h2>
      <p className="mt-2 text-sm italic text-mocha/60 font-serif">
        Khoảnh khắc của chúng tôi
      </p>
      <div className="divider" />

      {/* Carousel */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-mocha/10">
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
          <AnimatePresence mode="sync">
            <motion.img
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              src={`/albums/${photos[index]}`}
              alt={`Photo ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition backdrop-blur-sm"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition backdrop-blur-sm"
        >
          ›
        </button>

      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? 'w-5 h-2 bg-gold'
                : 'w-2 h-2 bg-gold/30 hover:bg-gold/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
