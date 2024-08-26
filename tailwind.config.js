/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    
  ],


  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        "dark-purple": "#081a51",
        "light-white": "rgba(255,255,255,0.17",
        
      },

     

      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
      

      boxShadow:{
        
      }
    },
    screens: {
      xmm:"270px",
      xs: "480px",
      ss: "620px",
      sm: "765px", 
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
 
})