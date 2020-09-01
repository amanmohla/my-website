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
                blue: {
                    ...defaultTheme.colors.blue,
                },
                green: {
                    ...defaultTheme.colors.green,
                    '100': '#E3F1DF',
                    '200': '#BBE5B3',
                    '400': '#50B83C',
                    '600': '#108043',
                    '900': '#173630',
                },
                indigo: {
                    ...defaultTheme.colors.indigo,
                    '100': '#F4F5FA',
                    '200': '#B3BCF5',
                    '400': '#5C6AC4',
                    '600': '#202E78',
                    '900': '#000639',
                },
                red: {
                    ...defaultTheme.colors.red,
                    '100': '#FBEAE5',
                    '200': '#FEAD9A',
                    '400': '#DE3618',
                    '600': '#BF0711',
                    '900': '#330101',
                },
                orange: {
                    ...defaultTheme.colors.orange,
                    '100': '#FDF6E3',
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
