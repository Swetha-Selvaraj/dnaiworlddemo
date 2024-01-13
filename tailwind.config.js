/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./**/*.{razor,html,cshtml}'],
    theme: {

      extend: {
          colors: {

              'bgDark': '#0f172a',
              'bgDarker': '#27272f',
              'bgLight': '#ffffff',

              'textDark': '#020617',
              'textLight': '#f1f5f9',

              'primary': '#B34ACE',
              'primaryHover': '#77228D',
              'secondary': '#1D42DA',
              'secondaryHover': '#1A36A6'

          },
      },
  },
  plugins: [],
}

