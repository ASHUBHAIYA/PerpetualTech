/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        base: '#F8FAFC',
        surface: '#FFFFFF',
        'surface-2': '#F1F5F9',
        accent: '#0284C7',
        'accent-light': '#0EA5E9',
        emerald: '#10B981',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
