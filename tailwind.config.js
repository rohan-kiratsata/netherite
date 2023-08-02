/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        generalSans: ["General Sans", "sans-serif"],
      },
      colors: {
        "primary-black": "#101010",
        "primary-white": "#FDFDFD",
      },
    },
  },
  plugins: [],
};
