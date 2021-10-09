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
    plugins: [require('tailwindcss-debug-screens')],
};