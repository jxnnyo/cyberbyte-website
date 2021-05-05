module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ed1265'
        },
        secondary: {
          DEFAULT: '#ee2924'
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
