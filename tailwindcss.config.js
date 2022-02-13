const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Work Sans", ...fontFamily.sans]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
