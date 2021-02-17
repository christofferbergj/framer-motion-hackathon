const colors = require('tailwindcss/colors')

// Utilities
const em = (px, base = 16) => `${px / base}em`
const rem = (px, base = 16) => `${px / base}rem`

module.exports = {
  darkMode: 'class',
  purge: {
    content: [
      './src/pages/**/*.{ts,tsx}',
      './src/components/**/*.{ts,tsx}',
      './src/features/**/*.{ts,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',

        'accents-0': 'var(--accents-0)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',
        'accents-9': 'var(--accents-9)',

        purple: {
          DEFAULT: '#8F24F5',
          50: '#FFFFFF',
          100: '#F3E7FE',
          200: '#DAB6FC',
          300: '#C186F9',
          400: '#A855F7',
          500: '#8F24F5',
          600: '#760ADC',
          700: '#5B08AB',
          800: '#41067A',
          900: '#27034A',
        },
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme('textColor.base'),
              a: {
                color: theme('colors.purple.400'),
              },
              strong: {
                color: theme('textColor.primary'),
              },
              'ol > li::before': {
                color: theme('colors.accents-4'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.accents-6'),
              },
              hr: {
                borderColor: theme('textColor.primary'),
              },
              blockquote: {
                color: theme('textColor.primary'),
                borderLeftColor: theme('colors.accents-3'),
              },
              h1: {
                color: theme('textColor.primary'),
              },
              h2: {
                color: theme('textColor.primary'),
              },
              h3: {
                color: theme('textColor.primary'),
              },
              h4: {
                color: theme('textColor.primary'),
              },
              'figure figcaption': {
                color: theme('textColor.secondary'),
              },
              code: {
                color: theme('textColor.primary'),
              },
              'a code': {
                color: theme('textColor.primary'),
              },
              pre: {
                color: theme('textColor.primary'),
                backgroundColor: theme('colors.accents-2'),
              },
              thead: {
                color: theme('textColor.primary'),
                borderBottomColor: theme('colors.accents-4'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.accents-6'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}