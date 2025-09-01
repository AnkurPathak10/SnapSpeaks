import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Greys
        grey: {
          50: "var(--foundation-greygrey-50)",
          100: "var(--foundation-greygrey-100)",
          200: "var(--foundation-greygrey-200)",
          300: "var(--foundation-greygrey-300)",
          400: "var(--foundation-greygrey-400)",
          500: "var(--foundation-greygrey-500)",
          600: "var(--foundation-greygrey-600)",
          700: "var(--foundation-greygrey-700)",
          800: "var(--foundation-greygrey-800)",
          900: "var(--foundation-greygrey-900)",
        },

        // Oranges
        orange: {
          50: "var(--foundation-orangeorange-50)",
          100: "var(--foundation-orangeorange-100)",
          200: "var(--foundation-orangeorange-200)",
          300: "var(--foundation-orangeorange-300)",
          400: "var(--foundation-orangeorange-400)",
          500: "var(--foundation-orangeorange-500)",
          600: "var(--foundation-orangeorange-600)",
          700: "var(--foundation-orangeorange-700)",
          800: "var(--foundation-orangeorange-800)",
          900: "var(--foundation-orangeorange-900)",
        },

        // Yellows
        yellow: {
          50: "var(--foundation-yellowyellow-50)",
          100: "var(--foundation-yellowyellow-100)",
          200: "var(--foundation-yellowyellow-200)",
          300: "var(--foundation-yellowyellow-300)",
          400: "var(--foundation-yellowyellow-400)",
          500: "var(--foundation-yellowyellow-500)",
          600: "var(--foundation-yellowyellow-600)",
          700: "var(--foundation-yellowyellow-700)",
          800: "var(--foundation-yellowyellow-800)",
          900: "var(--foundation-yellowyellow-900)",
        },
      },
    },
  },
  plugins: [tailwindAnimate],
}

export default config
