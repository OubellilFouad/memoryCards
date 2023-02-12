/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'main': '#029AC3',
      'card': '#FFBA1E',
      'white': '#FFFFFF',
      'purple': '#CD93F9',
      'brown': '#CA400B',
      'swamp': '#324E38',
      'gold': '#393600',
      'skin': '#FAD4C7',
      'blue': '#0000FE',
      'BMO': '#29998B',
      'grass': '#6FB43F',
      'transparent' : 'rgba(0,0,0,.5)'
    },
    screens: {
      'sm': '760px',
      'md': '1024px',
    }
  },
  plugins: [],
}
