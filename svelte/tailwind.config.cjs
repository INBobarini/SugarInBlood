const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        'carb-dark': '#865439',
        'carb-light': '#c68b59',
        'fat-dark': '#face7f',
        'fat-light': '#fcf0c8',
        'kcal-dark': '#32502e',
        'kcal-light': '#406343',
        'protein-dark': '#630a10',
        'protein-light' : '#911f27',

      }
    },                           
  },
  plugins: [forms, typography, daisyui],
};

module.exports = config;
