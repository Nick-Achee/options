const colors = require("tailwindcss/colors");


module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      slate: colors.slate,
      gray: colors.gray,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
      backgroundImage: {
        'hero-pattern': "url('/3.jpg')"
      },
      fontFamily: {
        prag: ["pragmatapro-fraktur"],
      },
      translate: ['group-hover', 'hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
