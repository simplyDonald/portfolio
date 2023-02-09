const defaultTheme = require('tailwindcss/defaultTheme')                                                                                                                                                                                                                                                                                                                    

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Expletus Sans'", ...defaultTheme.fontFamily.sans],
        body: ["Hind"]
      
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(63, 177, 150, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
