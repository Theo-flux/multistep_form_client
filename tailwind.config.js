/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      bgColor: '#EFF5FF',
      borderColor: '#D6D9E6',
      denim: '#022959',
      grey: '#9699AA',
      lightBlue: '#ABBCFF',
      lightGrey: '#D6D9E6',
      orange: "#FFAF7E",
      pink: '#F9818E',
      purple: '#483EFF',
      red: "#EE374A",
      skyBlue: "#BEE2FD",
      veryLightGrey: "#F8F9FF"
    },
    extend: {
    },
  },
  plugins: [],
}