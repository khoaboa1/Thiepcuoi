/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        display: ['"Philosopher"', 'Georgia', 'serif'],
        'display-vi': ['"Cormorant Garamond"', '"Be Vietnam Pro"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#E8DDD0',
        ivory: '#DED4C4',
        gold: '#B89766',
        mocha: '#6B4F3B',
        rose: '#C9A0A0',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 3s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};
