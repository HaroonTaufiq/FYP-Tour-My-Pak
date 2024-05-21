/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat",
        "tradegothic": "'TradeGothic LT Extended'",
        "manrope": "Manrope",
        barlow: "Barlow",
      },
      borderRadius: {
        "26xl": "45px",
        "19xl": "38px",
      },
      fontSize: {
        "3xs": "10px",
        "29xl": "48px",
        "7xl": "26px",
        "21xl": "40px",
      },
      colors:{
        mediumaquamarine: "rgba(141, 211, 187, 0.4)",
        lightcyan: "#cdeae1",
        black: "#000",
        lavender: "#d7e2ee",
        neutrals: "#fff",
        "mint-green": "#8dd3bb",
        paleturquoise: "#9be0c8",
        "orange-range-orange-90": "#ff7900",
        "blackish-green": "#112211",
        "primarycolor":"#ffffff",
        "secondarycolor":"#00401A",
        "grey-1": "#808080",
        "grey-2": "#fafafa",
        goldenrod: "rgba(255, 189, 57, 0.12)",
      

      },
    },
  },
  plugins: [],
}