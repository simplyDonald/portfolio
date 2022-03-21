module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Expletus Sans'"],
        body: ["Hind"]
      
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
