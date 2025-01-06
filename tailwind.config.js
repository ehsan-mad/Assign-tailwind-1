/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      'ibm-hebrew': ['"IBM Plex Sans Hebrew"', 'sans-serif'],
    },
    letterSpacing: {
      '-4%': '-0.04em',
    },},
  },

  plugins: [],
}

