module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
       spaceGrotesk: ["Space Grotesk","sans-serif"], 
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.6)",
          "0 0px 65px rgba(255, 255,255, 0.3)"
        ]
      }
    },
  },
  plugins: [],
}