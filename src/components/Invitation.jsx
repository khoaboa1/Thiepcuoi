import { motion } from 'framer-motion';
import { wedding } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

function Cell({ top, mid, bot }) {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="eyebrow text-[10px]">{top}</div>
      <div className="font-display text-3xl sm:text-4xl text-mocha mt-2">{mid}</div>
      <div className="eyebrow text-[10px] mt-2">{bot}</div>
    </div>
  );
}

export default function Invitation() {
  const { t } = useLang();
  const tr = t.invitation;
  const { day, month, year, weekday } = wedding.date;
  const monthName = tr.months[month - 1];

  return (
    <section className="section">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading">
        {tr.heading}
      </motion.h2>
      <div className="divider" />
      <div className="flex justify-center divide-x divide-gold/30 my-6">
        <Cell top={tr.dayLabel}   mid={day}       bot={tr.weekday} />
        <Cell top={tr.monthLabel} mid={monthName} bot={`${tr.yearLabel} ${year}`} />
      </div>
      <p className="mt-6 text-base sm:text-lg text-mocha font-serif italic tracking-wide">
        {tr.subtitle}
      </p>
    </section>
  );
}
