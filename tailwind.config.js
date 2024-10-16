/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        beatdrop: {
          profile: {
            secondary: "#747474",
          },
          primary: "#E12A62",
          danger: "#F30408",
          placeholder: "#828282",
          border: "#D1D1D1",
          tag: {
            orange: "#FF7200",
            green: "#218E8A",
            purple: "#3B054F",
            pink: "#E12A62",
            yellow: "#FEB538",
            gray: "#F4F4F4",
          },
        },
      },
      width: {
        "screen-2/5": "40vw",
      },
    },
  },
  plugins: [],
};
