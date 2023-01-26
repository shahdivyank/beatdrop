/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beatdrop: {
          teal: "#218E8A",
          purple: "#3B054F",
          pink: "#E12A62",
          orange: "#FF7200",
          yellow: "#FEB538",
          darkgrey: "#E3E3E3",
          lightgrey: "#F0F0F0",
          black: "#000000"
        },
      },
    },
  },
  plugins: [],
};
