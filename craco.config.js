// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('daisyui'),
        require('autoprefixer'),
      ],
    },
  },
}
