import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { eventDate } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

function diff(now, target) {
  let ms = Math.max(0, target - now);
  const days = Math.floor(ms / 86400000); ms -= days * 86400000;
  const hours = Math.floor(ms / 3600000); ms -= hours * 3600000;
  const minutes = Math.floor(ms / 60000); ms -= minutes * 60000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds };
}

function Cell({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[64px]">
      <div className="font-serif text-3xl sm:text-4xl text-mocha tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 eyebrow text-[10px]">{label}</div>
    </div>
  );
}

export default function Countdown() {
  const { t } = useLang();
  const tr = t.countdown;
  const [time, setTime] = useState(() => diff(Date.now(), eventDate.getTime()));
  useEffect(() => {
    const id = setInterval(() => setTime(diff(Date.now(), eventDate.getTime())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section">
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="eyebrow">
        {tr.eyebrow}
      </motion.p>
      <div className="divider" />
      <div className="flex justify-center gap-3 sm:gap-6">
        <Cell value={time.days}    label={tr.days} />
        <Cell value={time.hours}   label={tr.hours} />
        <Cell value={time.minutes} label={tr.minutes} />
        <Cell value={time.seconds} label={tr.seconds} />
      </div>
    </section>
  );
}
