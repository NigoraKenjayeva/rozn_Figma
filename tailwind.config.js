/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        green_bg: "#43A548",
      },
      textColor:{
        'black-text': "#2C2B35",
      },
      boxGradient:{
        'btn-gradient': 'linear-gradient(100.98deg, #43A548 -4.14%, #52E259 108.69%);'
      },
    },
    plugins: [],
  },
};
