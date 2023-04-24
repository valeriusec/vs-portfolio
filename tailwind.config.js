/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
    },
    colors: {
      primary: {
        50: "#ecfdf4",
        100: "#d1fae2",
        200: "#a7f3ca",
        300: "#6de8ae",
        400: "#29c27f",
        500: "#0fba74",
        600: "#04975e",
        700: "#03794e",
        800: "#05603f",
        900: "#064e36",
        950: "#022c1f",
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#515152",
        800: "#464646",
        900: "#292929",
        950: "#16161b",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
