/** @type {import('tailwindcss').Config} */

export const content = [
  './src/template.html',
  './dist/index.html',
  './src/*.js',
];
export const theme = {
  extend: {},
};
export const variants = {};
export const plugins = [
  ({ addUtilities }) => {
    const newUtilities = {
      '.font-small-caps': {
        fontVariant: 'small-caps',
      },
      '.font-variant-normal': {
        fontVariant: 'normal',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },
];
export const mode = 'jit';
