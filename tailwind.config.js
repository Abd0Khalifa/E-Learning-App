module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'main-color': '#FF5733', 
        'card-dark': '#2C2F36',
        'back-color': '#121212',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
