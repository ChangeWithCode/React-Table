/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: '#2463EB',
        font: {
          default: 'red',
          tableRow : 'white',
          header: '#2c3e50',
          link: '#2980b9',
        },
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
