/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '88': '22rem',
        '365': '365px',
      },
      maxWidth: {
        'sc': '70px',
        'cc': '155px',
        '280px': '280px'
      },
      height: {
        '144': '32rem',
        '33' : '30%',
      },
      padding: {
        'cc': '9px'
      },
      boxShadow: {
        'tn' : '0 2px 5px #696969',
        'bn' : '0 0 10px #696969',
      },
    },
  },
  plugins: [],
}

