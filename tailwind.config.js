/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {  
      animation: {
        'reverse': 'animation-direction: reverse',
        'forwards': 'animation-direction: forwards'
      },    
      colors: { 
        'mint': '#43D19F',
        'ocean': '#566CE9' 
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake"]
  }
}
