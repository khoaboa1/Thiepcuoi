import { motion } from 'framer-motion';
import { wedding } from '../config.js';
import { useLang } from '../context/LanguageContext.jsx';

function formatPhone(raw) {
  const d = raw.replace(/\D/g, '');
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  return raw;
}

const photoStyle1 = {
  objectFit: 'cover', objectPosition: 'center top',
  transform: 'scale(2.5)', transformOrigin: '23% 18%',
};
const photoStyle2 = {
  objectFit: 'cover', objectPosition: 'center top',
  transform: 'scale(2.8)', transformOrigin: '75% 25%',
};

function PhoneIcon({ small }) {
  return (
    <svg className={small ? 'w-3.5 h-3.5' : 'w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={small ? 2 : 1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function CircleCard({ person, role, photoSrc, photoStyle, delay }) {
  const { phone, name } = person;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay }} className="flex flex-col items-center gap-4">
      <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="group relative w-36 h-36 rounded-full border-2 border-gold/50 overflow-hidden shadow-md hover:border-gold hover:shadow-lg transition">
        <img src={photoSrc} alt={name} style={photoStyle} className="w-full h-full" />
        <span className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/25 transition flex items-center justify-center">
          <PhoneIcon />
        </span>
      </a>
      <div className="text-center">
        <p className="eyebrow text-[10px]">{role}</p>
        <p className="mt-1 font-display text-lg text-mocha">{name}</p>
        <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-sm text-gold hover:bg-gold hover:text-white transition">
          <PhoneIcon small />
          {formatPhone(phone)}
        </a>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const tr = t.contact;
  return (
    <section className="section">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading">
        {tr.heading}
      </motion.h2>
      <p className="mt-2 text-sm italic text-mocha/60 font-serif">{tr.subtitle}</p>
      <div className="divider" />
      <div className="flex justify-center gap-12 sm:gap-20">
        <CircleCard person={wedding.groom} role={tr.groom} photoSrc="/images/couple_groom.jpg" photoStyle={photoStyle1} delay={0} />
        <CircleCard person={wedding.bride} role={tr.bride} photoSrc="/images/couple_bride.jpg" photoStyle={photoStyle2} delay={0.12} />
      </div>
    </section>
  );
}
