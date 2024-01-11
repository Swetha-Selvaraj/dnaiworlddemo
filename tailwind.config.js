/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{razor,html,cshtml}'],
  theme: {
      extend: {
          colors: {

              'bgDark': '#252436',
              'bgDarker': '#27272f',
              'bgLight': '#e2e8f0',

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

