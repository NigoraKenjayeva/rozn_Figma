/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        green_bg: "#43A548",
      },
    },
  },
  plugins: [],
};
