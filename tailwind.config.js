/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontSize: {
      xs: "9px",
      sm: "11px",
      base: "14px",
      xl: "1.25rem",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
