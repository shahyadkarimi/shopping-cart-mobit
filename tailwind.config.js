/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/*.js",
    "./src/components/*.js",
    "./src/components/Home/*.js",
    "./src/components/Home/banners/*.js",
    "./src/components/Home/header/*.js",
    "./src/components/Home/shared/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
