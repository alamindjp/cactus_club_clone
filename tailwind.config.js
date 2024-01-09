/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-bg": "linear-gradient(94deg, #45CAA0 13.79%, #10BB85 92.08%)",
      },
    },
    fontFamily: {
      luckiest: ["Luckiest Guy, cursive"],
      poppins: ["Poppins, sans-serif"],
      rubik: ["Rubik One-Regular, Helvetica"],
      IBM: ["IBM Plex Sans, sans-serif"],
    },
    textShadow: {
      custom: "2px 2px 0 rgba(0,0,0,0.5)",
    },
    colors: ({ colors }) => ({
      ...colors,
      "primary-white": "#FFFFFF",
      "link": "#13BC87",
      "primary-title": "#5E3D1C",
      "orange-primary": "#F5AA52",
      "secondary-title": "#2D471A",
      "orange-secondary": "#E09F75",
      "green-secondary": "#284E19",
      "submit-button":"#E7E8E9",
      "s-button-text":"#9FA3A9",
      "link2":"#18BD89",
      "under_line":"#178BBD",
      "primary-hover": "#F5AA52"
    }),
  },
  plugins: [],
}
