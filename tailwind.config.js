/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark neutrals — ~80% of the visual weight
        ink: {
          950: '#070707',
          900: '#0D0D0D',
          850: '#121212',
          800: '#171717',
          700: '#1F1F1F',
        },
        line: '#292929',
        muted: '#A7A7A7',
        // Formal deep-pink accent — use sparingly
        primary: {
          DEFAULT: '#D9467A',
          dark: '#B83263',
          light: '#F08AAA',
          soft: '#F6C1D2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(217, 70, 122, 0.45)',
        'glow-sm': '0 0 24px -6px rgba(217, 70, 122, 0.4)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.8)',
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
}
