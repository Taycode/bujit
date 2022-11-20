/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*/**/**.tsx'],
  theme: {
    extend: {
      colors : {
        bujit : {
          100 : '#FFEAD1',
          500 : '#FF961B',
          600 : '#D47D17',
          900 : '#804B0E'
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
          500 : '#FDFDFD',
          700 : '#A9A9A9'
        },
        success : {
          500 : '#1FD202'
        }
      }
    },
  },
  plugins: [],
}
