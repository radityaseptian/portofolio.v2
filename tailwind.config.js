/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'poppins',
        rubik: 'rubik',
      },
      boxShadow: {
        navModal: '0px -3px 3px rgba(0,0,0,.05)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
