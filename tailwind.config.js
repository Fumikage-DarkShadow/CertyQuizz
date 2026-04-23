/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        comptia: {
          DEFAULT: '#E2231A',
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#E2231A',
          600: '#b91c1c',
          700: '#991b1b',
        },
        ebios: {
          DEFAULT: '#1E40AF',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#1E40AF',
          600: '#1e3a8a',
          700: '#172554',
        },
        sc200: {
          DEFAULT: '#0078D4',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0078D4',
          600: '#0062ad',
          700: '#004e8c',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'shake': 'shake 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shake: {
          '0%,100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
      },
    },
  },
  plugins: [],
}
