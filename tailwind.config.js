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
        'burnt': '#E98956', 
        'gum': '#E956D8',
        'ocean': '#566CE9' 
      },
      minHeight: {
        '10h': '10vh',
        '20h': '20vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '80h': '80vh',
        '90h': '90vh',
        '100h': '100vh',
        // 
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%'
      },
      maxHeight: {
        '10h': '10vh',
        '20h': '20vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '80h': '80vh',
        '90h': '90vh',
        // 
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%'
      },
      maxWidth: {
        '10h': '10vh',
        '20h': '20vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '80h': '80vh',
        '90h': '90vh',
        // 
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%'
      },
      width: {
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake"]
  }
}
