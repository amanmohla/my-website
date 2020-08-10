const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        black: '#2B2B28',
      },
      fontSize: {
        '5xl': '2.75rem',
        '6xl': '3.5rem',
        '7xl': '4.25rem',
        '8xl': '5rem',
      },
      fontFamily: {
        sans: [
          'Sora',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'LibreBaskerville',
          ...defaultTheme.fontFamily.serif,
        ],
        display: ['Sora', ...defaultTheme.fontFamily.sans],
        body: ['Sora', ...defaultTheme.fontFamily.sans]
      },
    },
  },
}
