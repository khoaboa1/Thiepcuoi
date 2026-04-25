import { motion } from 'framer-motion';
import { wedding } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

export default function Closing() {
  const { lang, t } = useLang();
  return (
    <section className="section">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <p className="font-serif text-base sm:text-lg italic text-mocha/80 leading-relaxed">
          "{wedding.closing.message}"
        </p>
        <div className="divider" />
        <p className="eyebrow">{t.closing.thankYou}</p>
        {/* New Vietnamese-safe option kept here for quick comparison:
            className={`${lang === 'vi' ? 'font-display-vi tracking-normal' : 'font-display tracking-wider'} text-3xl text-mocha mt-3`}
        */}
        <p className="font-display text-3xl tracking-wider text-mocha mt-3">{wedding.closing.signature}</p>
      </motion.div>
    </section>
  );
}
