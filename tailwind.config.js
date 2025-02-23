/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Add the paths to all your HTML and React files
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-brown": "#745179",
        "custom-slate": "#1b1919",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
