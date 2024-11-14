/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "560px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "blue-gradient":
          "`linear-gradient(\n          91.43deg,\n          #dcebfe -10.58%,\n          #0183d1 -8.9%,\n          #0152c5 42.56%,\n          #07338d 115.68%\n        )`",
      },
      colors: {
        primary: {
          background: "#0D131C",
          red: "#ED1D49",
          blue: "#2282F5",
          yellow: "#FFB636",
          green: "#1BB83D",
          header: "#19212C",
          navbar: "#111923",
          "icon-background": "#202A39",
          icon: "#A7B5CA",
          inactive: "#353C46",
        },
      },
      gridTemplateColumns: {
        128: "repeat(auto-fill, minmax(128px, 1fr))",
        200: "repeat(auto-fill, minmax(200px, 1fr))",
        "minmax-150": "repeat(auto-fill, minmax(150px, 1fr))",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
