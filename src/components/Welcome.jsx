import { motion } from 'framer-motion';
import { wedding } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

function FamilyCard({ side, role, name, father, mother, delay, tr, lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay }}
      className="w-full rounded-xl border border-gold/20 bg-white/60 backdrop-blur px-5 py-6 text-center"
    >
      <p className="eyebrow">{side}</p>
      <p className="mt-3 text-[13px] text-mocha/80 leading-6">{tr.mr} <span className="font-medium">{father}</span></p>
      <p className="text-[13px] text-mocha/80 leading-6">{tr.mrs} <span className="font-medium break-words">{mother}</span></p>
      <div className="mx-auto my-3 w-10 border-t border-gold/40" />
      {/* New Vietnamese-safe option kept here for quick comparison:
          className={`mt-3 text-xl text-mocha break-words ${lang === 'vi' ? 'font-display-vi tracking-normal' : 'font-display'}`}
      */}
      <p className="text-xl text-mocha break-words" style={{ fontFamily: "'FzAghita', Georgia, serif", textTransform: 'none' }}>{name}</p>
      <p className="mt-1 text-xs italic text-mocha/60 font-serif">{role}</p>
    </motion.div>
  );
}

export default function Welcome() {
  const { lang, t } = useLang();
  const tr = t.welcome;
  return (
    <section className="section">
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="eyebrow">
        {tr.eyebrow}
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.1 }} className="heading mt-3">
        {tr.heading}
      </motion.h2>
      <div className="divider" />
      <p className="text-sm text-mocha/70 leading-relaxed">{tr.subtitle}</p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <FamilyCard side={tr.groomSide} role={tr.groomRole} name={wedding.groom.fullName} father={wedding.groom.father} mother={wedding.groom.mother} delay={0} tr={tr} lang={lang} />
        <FamilyCard side={tr.brideSide} role={tr.brideRole} name={wedding.bride.fullName} father={wedding.bride.father} mother={wedding.bride.mother} delay={0.1} tr={tr} lang={lang} />
      </div>
    </section>
  );
}
