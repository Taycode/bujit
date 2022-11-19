/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*/**/**.tsx'],
  theme: {
    extend: {
      colors : {
        bujit : {
          100 : '#FFEAD1',
          500 : '#FF961B'
        },
        ash : {
          100 : '#EDEDED',
          500 : '#A6A6A6',
          700 : '#8A8A8A'
        },
        error : {
          500 : '#FF2F2F'
        },
        secondary : {
          500 : '#FDFDFD'
        }
      }
    },
  },
  plugins: [],
}
