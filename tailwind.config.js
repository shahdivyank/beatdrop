/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        beatdrop: {
          primary: "#E12A62",
          placeholder: "#828282",
          border: "#D1D1D1",
          tag: {
            orange: "#FF7200",
            green: "#218E8A",
            purple: "#3B054F",
            pink: "#E12A62",
            yellow: "#FEB538",
          },
        },
      },
    },
  },
  plugins: [],
};
