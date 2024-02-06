/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "350px",
      msm: "395px",
      sm: "450px",
      xmd: "650px",
      md: "850px",
      mlg: "1150px",
      lg: "1300px",
      xlg: "1500px"
    },
    colors: {
      black: "#0D0D0D",
      white1: "#B7AA97",
      orange: "#EC5938",
      white: "#ffffff"
    },
    extend: {},
  },
  plugins: [],
}