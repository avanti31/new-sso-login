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
       fontSize: {
         '16':'16px'
       },
       textColor:{
         'gray':'#83838B'
       }
       
   }
 },
  variants: {
    extend: {},
  },
  plugins: [],
};