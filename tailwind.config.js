/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    minWidth: {
      '1/7': '14.28571429%',
      '1/6': '16.66666667%',
      'withoutGap': 'calc(14.28571429% - 10px)'
    }
  },
  plugins: [],
}
