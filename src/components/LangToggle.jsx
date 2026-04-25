import { useLang } from '../context/LanguageContext.jsx';

export default function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="fixed top-4 left-4 z-50 h-9 rounded-full bg-white/80 backdrop-blur border border-gold/30 shadow-md flex items-center px-3 gap-1.5 hover:bg-gold hover:text-white hover:border-gold transition"
    >
      <span className={`text-xs font-medium tracking-wider transition ${lang === 'vi' ? 'text-mocha' : 'text-mocha/40'}`}>VI</span>
      <span className="text-gold/40 text-xs">|</span>
      <span className={`text-xs font-medium tracking-wider transition ${lang === 'en' ? 'text-mocha' : 'text-mocha/40'}`}>EN</span>
    </button>
  );
}
