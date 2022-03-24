const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/3.jpg')"
      },
      fontFamily: {
        prag: ["pragmatapro-fraktur"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
