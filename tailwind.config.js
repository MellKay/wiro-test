/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],  
  theme: {
    colors: {
      "c-orange": 'rgb(var(--c-orange) / <alpha-value>)',
      "c-blue": 'rgb(var(--c-blue) / <alpha-value>)',
    },
    extend: {
      strokeWidth: {
        '20': '20px',
      }
    },
  },
  plugins: [],
}

