/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
    },
  },
  daisyui: {
    themes: ["light", "cupcake"],
  },
  plugins: [
    require("daisyui"),
  ],
}

