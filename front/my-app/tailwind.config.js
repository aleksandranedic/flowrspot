/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          logo: '#E4988D',
          text: '#DF9186',
          dark: '#EAA79E',
          light: '#ECBCB3',
          pointer: '#FBDDCE'
        },
        secondary : {
          gray: '#949EA0',
          lightGray: "#BEC4C6",
          title: "#334144",
          input: "#F5F6F7",
          inputLabel: "#949EA0",
          background: "#F2F2F2"
        }
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'PlayfairDisplay' : ['PlayFair Display', 'sans-serif']
      },
      backgroundImage: {
        'homePageBanner': "url('../public/images/banner.png')"
      }
    },
  },
  plugins: [],
}