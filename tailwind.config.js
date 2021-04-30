module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4889ed',
        secondary: '#f5f5f5',
        // ...
      },
    },
  },
  variants: {
    extend: {
      // ...
      filter: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
