/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            transitionDuration: {
                '2000': '2000ms',
                '2500': '2500ms'
            },
            fontFamily: {
                'body': ['MonteCarlo', 'cursive'],
            },
        },
        screens: {
            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }
        },
        plugins: [],
    }
}