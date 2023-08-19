/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "640px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
