// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        debugScreens: { position: ['top', 'left'] },
        extend: {},
    },
    variants: {
        extend: {},
    },
    // corePlugins: {
    //   preflight: false,
    // },
    plugins: [
        require('tailwindcss-debug-screens'),
        plugin(function({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme('fontSize.4xl') },
                h2: { fontSize: theme('fontSize.xl') },
                h3: { fontSize: theme('fontSize.lg') },
            });
        }),
    ],
};