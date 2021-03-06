module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {

        roboto: "'Roboto', 'sans-serif'",
        poppins: "'Poppins'"

      },
      colors: {
        'figma-green': '#93D062',
      },
    },
  },
  plugins: [],
}
