module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(179, 62%, 43%)",
        BrightYellow: "hsl(71, 73%, 54%)",
        LightGray: "hsl(204, 43%, 93%)",
        GrayishBlue: "hsl(218, 22%, 67%)",
      },
      fontFamily: {
        body: ["Karla"],
      },
      width: {
        "w-card-m": "310px",
        "card-d-top": "576px",
        "card-d-bot": "288px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
