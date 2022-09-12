/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tan: 'rgba(217, 196, 153, 1)',
        opal: 'rgba(166, 193, 192, 1)',
        cadet: 'rgba(97, 113, 119, 1)',
        slategray: 'rgba(108, 133, 146, 1)',
        burnishedbrown: 'rgba(165, 130, 124, 1)',
      },
    },
  },
  plugins: [],
};
