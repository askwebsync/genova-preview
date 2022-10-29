module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.1rem",
      xl: "1.35rem",
      xxl: "1.65rem",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
