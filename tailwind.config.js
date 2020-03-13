/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  theme: {
    spinner: () => ({
      default: {
        color: 'black',
        size: '3em',
        border: '2px',
        speed: '500ms',
      },
    }),
    extend: {},
  },
  variants: {},
  plugins: [require('tailwindcss-spinner')()],
};
