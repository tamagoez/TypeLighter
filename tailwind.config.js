module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{jsx,tsx,js,ts}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
