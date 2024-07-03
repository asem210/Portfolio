/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryback: "#EEEEEE",
        secondback: "#E8D5C4",
        thirdback: "#FFF1DC",
        firstmisc: "#3A98B9",
        secondmisc: "#22A39F",
        thirdmisc: "#222222",
        fourthmisc: "#434242",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico"],
        oswald: ["Oswald"],
        ssp: ["Source Sans Pro"],
        belleza: ["Belleza"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
  plugins: [],
};
