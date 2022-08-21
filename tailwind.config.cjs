/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
