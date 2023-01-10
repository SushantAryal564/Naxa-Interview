/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/component/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        naxaBlue: "#124af4",
      },
      fontFamily: {
        naxaFont: ["Montserrat"],
      },
      screens: {
        xxl: { max: "1440px" },
        "2xl": "1440px",
        xl: "1200px",
        l: "992px",
        m: "768",
        s: "576",
      },
      fontSize: {
        basefont: "0.785rem",
      },
      backgroundImage: {
        heroBackground:
          "url('https://naxa.com.np/5f2e7ab4fc673af02b45eed51bf5cb5e.jpg')",
      },
      maxWidth: {
        "1/2": "90%",
      },
    },
  },
  plugins: [],
};
