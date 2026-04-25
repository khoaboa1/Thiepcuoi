import { motion } from 'framer-motion';
import { wedding } from '../config.js';

export default function Calendar() {
  const { year, month, day } = wedding.date;
  const first = new Date(year, month - 1, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'][month - 1];
  const dows = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  return (
    <section className="px-4 py-16 max-w-xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white/60 backdrop-blur rounded-2xl border border-gold/20 px-5 py-6 shadow-sm"
      >
        {/* Header */}
        <p className="font-display text-xl text-mocha tracking-[0.25em] uppercase">
          {monthName} {year}
        </p>

        {/* Day-of-week labels */}
        <div className="grid grid-cols-7 mt-5 text-[11px] font-medium text-gold uppercase tracking-wider">
          {dows.map((d) => (
            <div key={d} className="py-2">{d}</div>
          ))}
        </div>

        <div className="w-full h-px bg-gold/20 mb-2" />

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((d, i) => (
            <div
              key={i}
              className={
                'relative flex items-center justify-center aspect-square rounded-full text-base font-light transition ' +
                (d === day
                  ? 'bg-gold text-white font-semibold text-lg shadow-md'
                  : d
                  ? 'text-mocha/80 hover:bg-gold/10'
                  : 'text-transparent pointer-events-none')
              }
            >
              {d || '·'}
              {d === day && (
                <span className="absolute -top-1 -right-0.5 text-[11px] text-red-500 leading-none">❤</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
