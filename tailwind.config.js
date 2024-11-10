/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**.{html,js}","./index.html"],
  theme: {
    extend: {
      boxGradient:{
        'btn-gradient': 'linear-gradient(100.98deg, #43A548 -4.14%, #52E259 108.69%);'
      },
    },
  },
  plugins: [],
}