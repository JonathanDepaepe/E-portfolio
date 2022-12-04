/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vegan : ["vegan"],
        lemon : ["lemonMilk"]
      },
      width: {
        page: "70%"
      },
      colors: {
        java: "#f89820",
        react: "#61DBFB",
        php: "#474A8A",
        html5: "#E34C26",
        css3: "#264de4",
        git: "#F1502F",
        python: "#FFDE57"
      },
      boxShadow: {
        profile: "0 4px 30px"
      }
    },
  },
  plugins: [],
}
