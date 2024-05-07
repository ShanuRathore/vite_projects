/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#8ba0a4",
        yellow:"#f8e16f",
        "dark-yellow":"#f29f05",
        orange:"#e12729"
      }
    },
  },
  plugins: [],
}

