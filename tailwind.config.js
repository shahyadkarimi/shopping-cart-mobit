/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/*.js",
    "./src/components/*.js",
    "./src/components/Home/*.js",
    "./src/components/Home/SectionTitle.js",
    "./src/components/Home/header/*.js",
    "./src/components/Home/SpecialOfferProducts/*.js",
    "./src/components/Home/banners/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
