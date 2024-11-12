/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "grey-section": '#2C2B35',
        green_bg: "#43A548",
        body_bg: "#F7F8F8",
        grey_gb: "#EBF5EB",
      },
      textColor: {
        green_text: "#43A548",
        'grey-text': "#6F7973",
        "black-text": "#2C2B35",
      },
      boxGradient: {
        "btn-gradient":
          "linear-gradient(100.98deg, #43A548 -4.14%, #52E259 108.69%);",
      },
      boxShadow: {
        "box-shadow":"0px 0px 10px 3px rgba(0,0,0,0.1)",
        "box-shadow-hover":"0px 0px 10px 3px rgba(0,0,0,0.2)",
      },
    },
    plugins: [],
  },
};
