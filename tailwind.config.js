const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: [`Cinzel`],
        lemon: [`lemon`],
      },
    },
  },
  plugins: [require("postcss-import"), myClassPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};

function myClassPlugin() {
  return function ({ addUtilities }) {
    addUtilities({
      ".my-rotate-y-180": {
        transform: "rotateY(180deg)",
      },
      ".preserve-3d": {
        transformStyle: "preserve-3d",
      },
      ".perspective": {
        perspective: "1000px",
      },
      ".backface-hidden": {
        backfaceVisibility: "hidden",
      },
    });
  };
}
