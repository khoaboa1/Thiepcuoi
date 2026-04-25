import { motion } from 'framer-motion';
import { wedding } from '../config.js';

function FamilyCard({ side, role, name, father, mother, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay }}
      className="w-full rounded-xl border border-gold/20 bg-white/60 backdrop-blur px-5 py-6 text-center"
    >
      <p className="eyebrow">{side}</p>
      <p className="mt-3 font-display text-xl text-mocha break-words">{name}</p>
      <p className="mt-1 text-xs italic text-mocha/60 font-serif">{role}</p>
      <div className="mx-auto my-3 w-10 border-t border-gold/40" />
      <p className="text-[13px] text-mocha/80 leading-6">
        Ông <span className="font-medium">{father}</span>
      </p>
      <p className="text-[13px] text-mocha/80 leading-6">
        Bà <span className="font-medium break-words">{mother}</span>
      </p>
    </motion.div>
  );
}

export default function Welcome() {
  return (
    <section className="section">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="eyebrow"
      >
        Welcome to our wedding
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="heading mt-3"
      >
        Trân trọng kính mời
      </motion.h2>
      <div className="divider" />
      <p className="text-sm text-mocha/70 leading-relaxed">
        Quý khách tới dự lễ thành hôn của chúng tôi
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <FamilyCard
          side="Nhà Trai"
          role="Trưởng Nam"
          name={wedding.groom.fullName}
          father={wedding.groom.father}
          mother={wedding.groom.mother}
          delay={0}
        />
        <FamilyCard
          side="Nhà Gái"
          role="Trưởng Nữ"
          name={wedding.bride.fullName}
          father={wedding.bride.father}
          mother={wedding.bride.mother}
          delay={0.1}
        />
      </div>
    </section>
  );
}
