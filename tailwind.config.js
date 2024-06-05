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
      }
    },
  },
  plugins: [],
}

