module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#333333", // main texts & heading 
        "secondary-dark_gray": "#727272", // para texts
        "light-gray": "#868686", // texts on light orange backgrounds
        "secondary-light-gray": "#F5F5F5", // stroke color for white bg cards
        "orange": "#FE793D", // main orange color
        "secondary-orange": "#FFE6DB", // stroke orange color for light-orange backgrounds
        "light-orange": "#FFF0E9", // light orange color for backgrounds
        "secondary-light_orange": "#FFF9F6", // color for linear gradient
        "green": "#5BAB5E", // green color for indicators and etc.
        "light-green": "#EEFFEF",
        "secondary-white": "#F3F3F3",
        "input-stroke": "#AEAEAE"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}