module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    screens: {
      'xs': {'min': '425px'},
      'max-xl': {'max': '1279px'},
      'max-lg': {'max': '1023px'},
      'max-md': {'max': '767px'},
      'max-sm': {'max': '639px'},
      'max-xs': {'max': '424px'},
    },
    },
  },
  plugins: [],
  important: true,
}
