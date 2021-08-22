###
Tailwind Debug Screens : 
  https://www.npmjs.com/package/tailwindcss-debug-screens
  npm install tailwindcss-debug-screens --save-dev

  // tailwind.config.js 
  module.exports = {
    theme: {
      debugScreens: { position: ['top', 'left'] },
    },
    plugins: [require('tailwindcss-debug-screens')],
  };

  className="debug-screens"s
###