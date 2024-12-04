/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          25: '#FCFCFC',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D1D1D6',
          400: '#A0A0AB',
          500: '#70707B',
          600: '#51525C',
          700: '#3F3F46',
          800: '#26272B',
          900: '#18181B',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        // Body XLarge
        'body-xl-bold': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'body-xl-medium': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'body-xl-regular': ['20px', { lineHeight: '28px', fontWeight: '400' }],
        // Body Large
        'body-lg-bold': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        'body-lg-medium': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        'body-lg-regular': ['18px', { lineHeight: '26px', fontWeight: '400' }],
        // Body Medium
        'body-md-bold': ['16px', { lineHeight: '24px', fontWeight: '700' }],
        'body-md-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-md-regular': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        // Body Small
        'body-sm-bold': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        'body-sm-medium': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-sm-regular': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        // Body XSmall
        'body-xs-bold': ['12px', { lineHeight: '16px', fontWeight: '700' }],
        'body-xs-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'body-xs-regular': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
