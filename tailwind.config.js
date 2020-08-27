const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                black: '#2B2B28',
                white: '#FFFFFF',

                gray: {
                    100: '#F9FAFB',
                    200: '#F4F6F8',
                    300: '#DFE3E8',
                    400: '#C4CDD5',
                    500: '#a0aec0',
                    600: '#919EAB',
                    700: '#919EAB',
                    800: '#919EAB',
                    900: '#919EAB',
                },
            },
            fontSize: {
                xl: '1.32rem',
                '5xl': '2.75rem',
                '6xl': '3.5rem',
                '7xl': '4.25rem',
                '8xl': '5rem',
            },
            fontFamily: {
                sans: ['Campton', ...defaultTheme.fontFamily.sans],
                serif: ['LibreBaskerville', ...defaultTheme.fontFamily.serif],
            },
        },
    },
};
