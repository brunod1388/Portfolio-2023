/** @type {import('tailwindcss').Config} */
import { theme } from "./src/constants/theme"

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    fontFamily: {
      // sans: ["Poppins", "sans-serif"],
      sans: ["Verdana", "sans-serif"],
    },
    extend: {
      ...theme,
      backgroundImage: {
        cool: "url('/src/assets/bg/cool-background.png')",
        blob: "url('/src/assets/bg/blob.svg')",
        magic: "url('/src/assets/bg/magic.png')",
        neodark: "linear-gradient(145deg, #1a202d, #1f2736)",
        neo: "linear-gradient(145deg, #c9cdd5, #eff4fe)",
      },
      dropShadow: {
        dark: "0 0 30px rgba(0, 0, 0, 0.5)",
        light: "0 0 30px rgba(255, 255, 255, 0.5)",
      },
      boxShadow: {
        "neo-xl": "26px 26px 52px #86898e, -26px -26px 52px #ffffff",
        "neodark-xl": " 26px 26px 52px #11161e, -26px -26px 52px #293246",
        "neo-sm": "8px 8px 17px #86898e, -8px -8px 17px #ffffff",
        "neodark-sm": " 8px 8px 17px #11161e, -8px -8px 17px #293246",
      },
    },
    keyframes: {
      glowLight: {
        "0%, 100%": { filter: "drop-shadow(0 0 10px rgba(133, 165, 255, 0.5))" },
        "50%": { filter: "drop-shadow(0 0 70px rgba(133, 165, 255, 0.6))" },
      },
      glowDark: {
        "0%, 100%": { filter: "drop-shadow(0 0 10px rgba(133, 165, 255, 0.5))" },
        "50%": { filter: "drop-shadow(0 0 70px rgba(133, 165, 255, 1))" },
      },
    },
    animation: {
      glowLight: "glowLight 4s ease-in-out infinite",
      glowDark: "glowDark 4s ease-in-out infinite",
    },
  },
  plugins: [],
}
