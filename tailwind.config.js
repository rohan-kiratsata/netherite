/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#101010",
        "primary-white": "#FDFDFD",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      light: {
        colors: {
          background: "#101010",

          primary: {
            DEFALUT: "#101010",
          },
        },
      },
    }),
  ],
};
