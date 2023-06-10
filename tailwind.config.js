/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pink: "#ffcad4",
      darkPink: "#f4acb7",
      brown: "#9d8189",
      green: "#5f939a",
      white: "#fff",
      nicePink: "#FC5D75",
    },
    fontFamily: {
      grand: ["Grandstander", "cursive"],
    },

    extend: {
      backgroundImage: {
        iceCream: 'url("/src/assets/icons8-13-70.png")',
        iceCream2: 'url("/src/assets/ice-cream.png")',

        iceCream3: 'url("/src/assets/ice-cream (1).png")',
      },
    },
  },
  plugins: [],
};
