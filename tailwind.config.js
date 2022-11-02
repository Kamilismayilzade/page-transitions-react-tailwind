/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        notSerifThin: "NotoSerifDisplayThin",
        notSerifSemiBold: "NotoSerifDisplaySemiBold",
        notSerifRegular: "NotoSerifDisplayRegular",
        notSerifMedium: "NotoSerifDisplayMedium",
        notSerifExtraLight: "NotoSerifDisplayExtraLight",
        notoSerifDisplayExtraBold: "NotoSerifDisplayExtraBold",
      },


    },
  },
  plugins: [],
}