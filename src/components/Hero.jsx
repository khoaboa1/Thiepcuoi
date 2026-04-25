import { motion } from 'framer-motion';
import { wedding, eventDate } from '../config.js';

const fmt = (n) => String(n).padStart(2, '0');

/* ── Botanical SVG sprites ── */
function SprigLeft() {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* main stem */}
      <path d="M140 70 Q100 50 40 20" stroke="#8aab82" strokeWidth="1.2" strokeLinecap="round"/>
      {/* leaves along stem */}
      <ellipse cx="120" cy="62" rx="12" ry="6" fill="#8aab82" opacity="0.7" transform="rotate(-30 120 62)"/>
      <ellipse cx="100" cy="52" rx="14" ry="6" fill="#6b9163" opacity="0.6" transform="rotate(-40 100 52)"/>
      <ellipse cx="80"  cy="42" rx="13" ry="5" fill="#a3c29a" opacity="0.65" transform="rotate(-50 80 42)"/>
      <ellipse cx="62"  cy="33" rx="12" ry="5" fill="#8aab82" opacity="0.6" transform="rotate(-55 62 33)"/>
      <ellipse cx="45"  cy="24" rx="10" ry="4" fill="#6b9163" opacity="0.55" transform="rotate(-60 45 24)"/>
      {/* upper branch */}
      <path d="M90 46 Q80 30 65 18" stroke="#8aab82" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="78"  cy="34" rx="10" ry="4" fill="#a3c29a" opacity="0.5" transform="rotate(-70 78 34)"/>
      <ellipse cx="66"  cy="22" rx="9"  ry="4" fill="#8aab82" opacity="0.5" transform="rotate(-65 66 22)"/>
      {/* small berries / buds */}
      <circle cx="42" cy="20" r="2.5" fill="#b89766" opacity="0.6"/>
      <circle cx="38" cy="16" r="2"   fill="#b89766" opacity="0.5"/>
      <circle cx="46" cy="15" r="1.8" fill="#b89766" opacity="0.45"/>
      {/* tiny white flowers */}
      <circle cx="130" cy="58" r="3" fill="white" opacity="0.8"/>
      <circle cx="127" cy="54" r="2" fill="white" opacity="0.6"/>
      <circle cx="134" cy="55" r="2" fill="white" opacity="0.6"/>
    </svg>
  );
}

function SprigRight() {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ transform: 'scaleX(-1)' }}>
      <path d="M140 70 Q100 50 40 20" stroke="#8aab82" strokeWidth="1.2" strokeLinecap="round"/>
      <ellipse cx="120" cy="62" rx="12" ry="6" fill="#8aab82" opacity="0.7" transform="rotate(-30 120 62)"/>
      <ellipse cx="100" cy="52" rx="14" ry="6" fill="#6b9163" opacity="0.6" transform="rotate(-40 100 52)"/>
      <ellipse cx="80"  cy="42" rx="13" ry="5" fill="#a3c29a" opacity="0.65" transform="rotate(-50 80 42)"/>
      <ellipse cx="62"  cy="33" rx="12" ry="5" fill="#8aab82" opacity="0.6" transform="rotate(-55 62 33)"/>
      <ellipse cx="45"  cy="24" rx="10" ry="4" fill="#6b9163" opacity="0.55" transform="rotate(-60 45 24)"/>
      <path d="M90 46 Q80 30 65 18" stroke="#8aab82" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="78"  cy="34" rx="10" ry="4" fill="#a3c29a" opacity="0.5" transform="rotate(-70 78 34)"/>
      <ellipse cx="66"  cy="22" rx="9"  ry="4" fill="#8aab82" opacity="0.5" transform="rotate(-65 66 22)"/>
      <circle cx="42" cy="20" r="2.5" fill="#b89766" opacity="0.6"/>
      <circle cx="38" cy="16" r="2"   fill="#b89766" opacity="0.5"/>
      <circle cx="46" cy="15" r="1.8" fill="#b89766" opacity="0.45"/>
      <circle cx="130" cy="58" r="3" fill="white" opacity="0.8"/>
      <circle cx="127" cy="54" r="2" fill="white" opacity="0.6"/>
      <circle cx="134" cy="55" r="2" fill="white" opacity="0.6"/>
    </svg>
  );
}

function TopWreath() {
  return (
    <svg viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      {/* left arc */}
      <path d="M30 90 Q60 60 100 40 Q130 25 160 20" stroke="#8aab82" strokeWidth="1.3" strokeLinecap="round"/>
      {/* right arc (mirrored) */}
      <path d="M290 90 Q260 60 220 40 Q190 25 160 20" stroke="#8aab82" strokeWidth="1.3" strokeLinecap="round"/>
      {/* left leaves */}
      <ellipse cx="55"  cy="74" rx="13" ry="5" fill="#8aab82" opacity="0.65" transform="rotate(-50 55 74)"/>
      <ellipse cx="78"  cy="57" rx="13" ry="5" fill="#6b9163" opacity="0.6"  transform="rotate(-55 78 57)"/>
      <ellipse cx="102" cy="43" rx="12" ry="5" fill="#a3c29a" opacity="0.65" transform="rotate(-60 102 43)"/>
      <ellipse cx="128" cy="30" rx="11" ry="4" fill="#8aab82" opacity="0.6"  transform="rotate(-65 128 30)"/>
      {/* right leaves */}
      <ellipse cx="265" cy="74" rx="13" ry="5" fill="#8aab82" opacity="0.65" transform="rotate(50 265 74)"/>
      <ellipse cx="242" cy="57" rx="13" ry="5" fill="#6b9163" opacity="0.6"  transform="rotate(55 242 57)"/>
      <ellipse cx="218" cy="43" rx="12" ry="5" fill="#a3c29a" opacity="0.65" transform="rotate(60 218 43)"/>
      <ellipse cx="192" cy="30" rx="11" ry="4" fill="#8aab82" opacity="0.6"  transform="rotate(65 192 30)"/>
      {/* top center berries */}
      <circle cx="155" cy="18" r="3"   fill="#b89766" opacity="0.7"/>
      <circle cx="163" cy="15" r="2.5" fill="#b89766" opacity="0.6"/>
      <circle cx="170" cy="19" r="2"   fill="#b89766" opacity="0.55"/>
      {/* white flowers scattered */}
      <circle cx="40"  cy="84" r="3.5" fill="white" opacity="0.85"/>
      <circle cx="36"  cy="79" r="2.5" fill="white" opacity="0.65"/>
      <circle cx="280" cy="84" r="3.5" fill="white" opacity="0.85"/>
      <circle cx="284" cy="79" r="2.5" fill="white" opacity="0.65"/>
      <circle cx="115" cy="36" r="2.5" fill="white" opacity="0.7"/>
      <circle cx="205" cy="36" r="2.5" fill="white" opacity="0.7"/>
    </svg>
  );
}

function BottomSprig() {
  return (
    <svg viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 mx-auto opacity-80">
      <path d="M20 25 Q80 10 120 25 Q160 40 220 25" stroke="#8aab82" strokeWidth="1" strokeLinecap="round"/>
      <ellipse cx="50"  cy="18" rx="10" ry="4" fill="#8aab82" opacity="0.6" transform="rotate(-20 50 18)"/>
      <ellipse cx="90"  cy="13" rx="10" ry="4" fill="#6b9163" opacity="0.55" transform="rotate(5 90 13)"/>
      <ellipse cx="130" cy="17" rx="10" ry="4" fill="#a3c29a" opacity="0.6" transform="rotate(10 130 17)"/>
      <ellipse cx="170" cy="22" rx="10" ry="4" fill="#8aab82" opacity="0.55" transform="rotate(20 170 22)"/>
      <circle cx="120" cy="25" r="2.5" fill="#b89766" opacity="0.6"/>
      <circle cx="115" cy="21" r="2"   fill="#b89766" opacity="0.5"/>
      <circle cx="125" cy="21" r="2"   fill="#b89766" opacity="0.5"/>
    </svg>
  );
}

export default function Hero() {
  const dateStr = `${fmt(wedding.date.day)}.${fmt(wedding.date.month)}.${wedding.date.year}`;

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 text-center">

      {/* Top wreath */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="w-full max-w-xs"
      >
        <TopWreath />
      </motion.div>

      {/* Save the date */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="eyebrow mt-2"
      >
        Save The Date
      </motion.p>

      {/* Names */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.45 }}
        className="mt-4 font-display text-5xl sm:text-6xl text-mocha leading-tight tracking-wider"
      >
        {wedding.groom.name}
        <span className="block font-serif italic text-3xl sm:text-4xl my-2 text-gold">&</span>
        {wedding.bride.name}
      </motion.h1>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="mt-6 flex items-center gap-4"
      >
        <span className="h-px w-10 bg-gold/60" />
        <time className="font-serif tracking-[0.3em] text-sm text-mocha" dateTime={eventDate.toISOString()}>
          {dateStr}
        </time>
        <span className="h-px w-10 bg-gold/60" />
      </motion.div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-6 font-serif italic text-mocha/60 text-sm sm:text-base max-w-[260px] leading-relaxed"
      >
        "Home is wherever I’m with you."
      </motion.p>

      {/* Bottom sprig */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <BottomSprig />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1"
      >
        <span className="eyebrow text-[9px] text-mocha/40">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gold/50 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
