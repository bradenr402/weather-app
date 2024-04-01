/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/template.html', './dist/index.html', './src/*.js'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
  mode: 'jit',
};
