/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Mulish': ['Mulish',],
      },
      colors: {
        'brand-white': '#F5F5F5',
        'brand-grey': '#808080',
        'brand-black': '#282828',
        'brand-grey': '#808080',
        'brand-grey-2': '#AAAAAA',
        'brand-red': '#ED1C24',
        'brand-grey-3': '#D3D3D3',
        'brand-black-2': '#202020',
      },
      spacing: {
        '52': '52px',
        '300': '300px',
      },
      fontSize: {
        12: ['14px', '20px'],
      },
      maxWidth: {
        '1099': '1099px',
        '620': '620px',
      },
      backgroundImage:{
        hhh:"radial-gradient(100% 1800% at 100% 0%, #FF626A 0%, #ED1C24 100%)"
      },
      screens: {
        'xs': '461px',
        // => @media (min-width: 461px) { ... }
      },
    },
  },
  plugins: [],
}
