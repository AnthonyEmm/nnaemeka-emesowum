/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "sans-serif"], // Add a fallback font
      },
    },
  },
  plugins: [],
};
