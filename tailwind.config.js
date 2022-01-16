// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  darkMode: false,
  theme: {
    debugScreens: { position: ['top', 'left'] },
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.5xl') },
        h2: { fontSize: theme('fontSize.3xl') },
        h3: { fontSize: theme('fontSize.2xl') },
      });
    }),
  ],
};
