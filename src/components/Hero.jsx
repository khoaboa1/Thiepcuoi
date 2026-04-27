import { motion } from 'framer-motion';
import { wedding, eventDate } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

const fmt = (n) => String(n).padStart(2, '0');

export default function Hero() {
  const { lang, t } = useLang();
  const dateStr = `${fmt(wedding.date.day)}.${fmt(wedding.date.month)}.${wedding.date.year}`;

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/background_pic.jpg"
          alt="Hải Đăng & Mai Thy"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — light at top, stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
      </div>

      {/* Bottom text panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        className="relative mt-auto px-6 pb-16 pt-10 flex flex-col items-center text-center"
      >
        <div className="absolute inset-x-4 bottom-6 top-2 rounded-[40px] bg-black/18 blur-3xl" aria-hidden="true" />

        {/* Save the date eyebrow */}
        <p className="relative font-sans text-[10px] tracking-[0.35em] uppercase text-white mb-3 [text-shadow:0_2px_14px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.35)]">
          {t.hero.saveTheDate}
        </p>

        {/* Names */}
        {/* New Vietnamese-safe option kept here for quick comparison:
            className={`${lang === 'vi' ? 'font-display-vi tracking-normal' : 'font-display tracking-wider'} text-5xl sm:text-6xl text-white leading-tight drop-shadow-md`}
        */}
        <h1 className="relative text-5xl sm:text-6xl text-white leading-tight tracking-wider [text-shadow:0_3px_18px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.35)]"
            style={{ fontFamily: "'FZFashion', Georgia, serif", textTransform: 'none' }}>
          {wedding.groom.name}
          <span className="block font-serif italic text-3xl sm:text-4xl my-2 text-gold">&</span>
          {wedding.bride.name}
        </h1>

        {/* Divider with date */}
        <div className="relative mt-5 flex items-center gap-4">
          <span className="h-px w-10 bg-white/70" />
          <time
            className="font-serif tracking-[0.3em] text-sm text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
            dateTime={eventDate.toISOString()}
          >
            {dateStr}
          </time>
          <span className="h-px w-10 bg-white/70" />
        </div>

        {/* Quote */}
        <p className="relative mt-4 font-serif italic text-white/90 text-sm sm:text-base max-w-[260px] leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
          "Home is wherever I'm with you."
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
