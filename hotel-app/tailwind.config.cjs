/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0C1D36",
        primaryYellow: "#F9CC0B",
        secondaryYellow: "#F9CC0B",
        accentBlue: "#F9F9F9",
      },
      backgroundImage:{
        'homeHeroImage':"url(./src/assets/images/hero.png)"
      }
    },
    
  },
  plugins: [],
};