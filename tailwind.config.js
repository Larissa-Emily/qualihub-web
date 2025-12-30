export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
       screens: {
        'lgx': '890px',   // quebra em ~1000px
        'xlx': '1616px',   // quebra em 1616px
      },
    },
  },
  
  plugins: [],
};
