/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfprodisplay: "'SF Pro Display', sans-serif"
      },

      colors: {
        'primary': {
          100: '#0381FF',
          200: '#0381FF',
          300: '#0381FF',
          400: '#0381FF',
          500: '#0381FF',
          600: '#0381FF',
          700: '#0381FF',
          800: '#0381FF',
          900: '#0381FF',
        },
        'dark': {
          100: '#0B122A',
          200: '#0B122A',
          300: '#0B122A',
          400: '#0B172A',
          500: '#0B122A',
          600: '#0B122A',
          700: '#0B122A',
          800: '#0B122A',
          900: '#0B122A',
        },
        'daybreakblue': {
          100: '#0381FF08',
          200: '#0381FF08',
          300: '#0381FF08',
          400: '#0381FF08',
          500: '#0381FF08',
          600: '#0381FF08',
          700: '#0381FF08',
          800: '#0381FF08',
          900: '#0381FF',
        },
      },
    },
  },
  plugins: [],
}

