/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        beatdrop: {
          teal: "#218E8A",
          purple: "#3B054F",
          pink: "#E12A62",
          orange: "#FF7200",
          yellow: "#FEB538",
          grey: "#E3E3E3",
          darkergrey: "#D9D9D9",
          lightgrey: "#F5F5F5",
          black: "#000000",
        },
      },
      borderRadius: {
        "4xl": "3rem",
      },
      fontSize: {
        xxs: "0.65rem",
        xxxs: "0.30rem",
        songName: "0.938rem",
        artistName: "0.8rem",
        postedBy: "0.625rem",
        timePosted: "0.625rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
