const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: {
        light: '#952323',
        DEFAULT: '#a73121',
        dark: '#f0997d',
      },
      yellow: {
        light: '#e38b29',
        DEFAULT: '#f1a661',
        dark: '#ffd8a9',
      },
      green: {
        dark: '#829460',
        DEFAULT: '#4e6c50',
        light: '#224b0c',
      }
    }                                
  },
  plugins: [forms, typography, daisyui],
};

module.exports = config;
