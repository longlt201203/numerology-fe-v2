/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['"Lora"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        merriweather: ['"Merriweather"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        dancingscript: ['"Dancing Script"', 'cursive'],
        sacramento: ['"Sacramento"', 'cursive'],
      },
      colors: {
        themeColors: {
          mysticBlue: '#1E3A8A',
          celestialGold: '#FFD700',
          cosmicPurple: '#6B21A8',
          etherealSilver: '#C0C0C0',
          starryWhite: '#F0F8FF',
          mysticalBlack: '#000000',
          astralTeal: '#008080',
          lunarRed: '#DC143C',
          galacticGreen: '#228B22',
        }
      },
    },
  },
  plugins: [],
}

