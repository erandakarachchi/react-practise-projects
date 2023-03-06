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
      backgroundImage: {
        homeHeroImage: "url(./src/assets/images/hero.png)",
        homeImage: "url(./src/assets/images/home.png)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        200: "50rem",
      },
    },
  },
  plugins: [],
};
