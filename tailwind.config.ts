import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        cream: {
          50: '#fdfcf9',
          100: '#fdfbf7',
          200: '#f8f5ee',
          300: '#f1eadf',
          400: '#e5dccf',
          500: '#d4c5b3',
        },
        marigold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        charcoal: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft': '0 10px 30px -5px rgba(24, 28, 38, 0.07), 0 4px 12px -2px rgba(24, 28, 38, 0.04)',
        'soft-lg': '0 20px 40px -10px rgba(24, 28, 38, 0.12), 0 8px 20px -4px rgba(24, 28, 38, 0.06)',
        'glow-saffron': '0 0 25px -5px rgba(234, 88, 12, 0.3)',
        'glow-forest': '0 0 25px -5px rgba(22, 101, 52, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
