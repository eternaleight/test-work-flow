module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    screens: {
      'xxs': {'min': '355px'},
      'xs': {'min': '425px'},
      'max-xl': {'max': '1279px'},
      'max-lg': {'max': '1023px'},
      'max-md': {'max': '767px'},
      'max-sm': {'max': '639px'},
      'max-xs': {'max': '424px'},
    },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
     function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '355px',
          },
          '@screen xs': {
            maxWidth: '465px',
          },
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
  important: true,
}
