import { motion } from 'framer-motion';
import { wedding } from '../config.js';

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
  const { day, month, year, weekday } = wedding.date;
  const monthName = ['Một', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Mười hai'][month - 1];

  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        Lễ Thành Hôn
      </motion.h2>
      <div className="divider" />

      <div className="flex justify-center divide-x divide-gold/30 my-6">
        <Cell top="Ngày" mid={day} bot={weekday} />
        <Cell top="Tháng" mid={monthName} bot={`Năm ${year}`} />
      </div>

      <p className="mt-6 text-sm text-mocha/70 italic font-serif">
        Tham dự tiệc mừng lễ thành hôn của chúng tôi
      </p>
    </section>
  );
}
