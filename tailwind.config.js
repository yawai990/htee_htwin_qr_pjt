/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'scan-ani':"scanAni 2s linear infinite"
      },
      keyframes:{
        scanAni:{
          '0%,100%':{ top:0 },
          '50%' :{ top:'100%'}
        }
      },
      backgroundColor :{
        'primary' :'#623B22',
        'secondary' : '#DFBAA5',
        'tb-btn' : '#D0CDCC',
        'neutral-black': '#170D08',
        'neutral-tint-white': '#F1E6E0'
      },
      borderColor:{
        'primary' :'#623B22',
      },
      colors : {
        'primary' :'#623B22',
        'secondary' : '#DFBAA5',
      }
    },
  },
  plugins: [],
}