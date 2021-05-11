module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // fontFamily: {
    //   open: ["Open Sans", "sans-serif"],
    // },

    // fontWeight: {
    //   light: 300,
    //   reguler: 400,
    //   semiBold: 600,
    //   extraBold: 800,
    // },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
    textColor: (theme) => theme("colors"),
    // textColor: {
    //   primary: "#4BABE1",
    //   secondary: "#ffed4a",
    //   danger: "#e3342f",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
