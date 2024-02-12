module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
       spaceGrotesk: ["Space Grotesk","sans-serif"], 
      },
      backgroundColor: {
        'custom-green': '#A1A982',
        'custom-hover': '#838B62',
      },
      textColor: {
        'custom-green' : '#838B62',
        'mycolor' : '#4F5633',
      },
    },
  },
  plugins: [],
}