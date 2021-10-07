module.exports = {
  purge: [".pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
       '220': '220px',
      },
      height: {
        '200': '200px',
       },
       
   }
 },
  variants: {
    extend: {},
  },
  plugins: [],
};