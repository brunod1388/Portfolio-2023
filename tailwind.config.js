/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    fontFamily: {
      // sans: ["Poppins", "sans-serif"],
      sans: ["Verdana", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0DC6E2",
        secondary: "#9039D8",
        tertiary: "#D89B00",
        light: "#dfe4ed",
        dark: "#1d2432",
        test: "#f50000",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundImage: {
        cool: "url('/src/assets/bg/cool-background.png')",
        blob: "url('/src/assets/bg/blob.svg')",
        magic: "url('/src/assets/bg/magic.png')",
      },
      dropShadow: {
        dark: "0 0 30px rgba(0, 0, 0, 0.5)",
        light: "0 0 30px rgba(255, 255, 255, 0.5)",
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
