/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "brown-400": "#8B4513",
        "brown-500": "#A52A2A",
        "brown-600": "#CD853F",
        "brown-700": "#8B4513",
      },
      textColor: {
        "brown-600": "#CD853F",
        "brown-700": "#8B4513",
      },
    },
  },
  plugins: [],
};
