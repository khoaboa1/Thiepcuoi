import { motion } from 'framer-motion';
import { wedding } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

function EventCard({ event, index, tr }) {
  const evTr = tr.events[event.key] || {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="rounded-xl border border-gold/20 bg-white/60 backdrop-blur px-6 py-7 text-center"
    >
      <p className="eyebrow text-[10px]">{event.eyebrow}</p>
      <h3 className="mt-3 font-display text-2xl text-mocha tracking-wide">{evTr.label || event.label}</h3>
      <div className="mx-auto my-4 w-12 border-t border-gold/40" />
      <div className="flex justify-center items-baseline gap-2">
        <span className="font-display text-3xl text-mocha">{event.time}</span>
        {evTr.timeNote && <span className="eyebrow text-[10px]">{evTr.timeNote}</span>}
      </div>
      <p className="mt-4 font-medium text-mocha">{event.venue}</p>
      <p className="mt-1 text-[13px] text-mocha/70 leading-relaxed">{event.address}</p>
      {event.mapUrl && (
        <a href={event.mapUrl} target="_blank" rel="noreferrer"
          className="inline-block mt-5 text-[11px] uppercase tracking-[0.3em] text-gold border border-gold/40 rounded-full px-5 py-2 hover:bg-gold hover:text-white transition">
          {tr.viewMap}
        </a>
      )}
    </motion.div>
  );
}

export default function Venue() {
  const { t } = useLang();
  const tr = t.venue;
  const events = wedding.events || [];
  return (
    <section className="section">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading">
        {tr.heading}
      </motion.h2>
      <p className="mt-2 text-sm italic text-mocha/60 font-serif">{tr.subtitle}</p>
      <div className="divider" />
      <div className="grid gap-5">
        {events.map((ev, i) => <EventCard key={ev.key} event={ev} index={i} tr={tr} />)}
      </div>
    </section>
  );
}
