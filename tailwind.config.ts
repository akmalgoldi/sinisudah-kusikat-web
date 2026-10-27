import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        canvas: {
          cream: "#FAF6EB",
          white: "#FFFFFF",
        },
        ink: "#111111",
        yellow: {
          pop: "#FFE600",
          card: "#FFF566",
        },
        coral: {
          pink: "#FF5C8A",
          light: "#FFE4EC",
        },
        mint: {
          pop: "#98F5E1",
          card: "#E6FAF4",
        },
        lilac: {
          chapter: "#D8CEF6",
        },
        blue: {
          card: "#EEF4FF",
        },
        brand: {
          red: "#D9232E",
          "red-dark": "#B81B24",
        },
      },
      transitionTimingFunction: {
        "bounce-pop": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out",
      },
      boxShadow: {
        "neo-xs": "2px 2px 0px #111111",
        "neo-sm": "3px 3px 0px #111111",
        neo: "4px 4px 0px #111111",
        "neo-md": "5px 5px 0px #111111",
        "neo-lg": "6px 6px 0px #111111",
        "neo-pop": "4px 4px 0px #111111",
        "neo-pop-hover": "6px 6px 0px #111111",
        "neo-pop-active": "2px 2px 0px #111111",
        "neo-dark": "4px 4px 0px #000000",
      },
      borderWidth: {
        "2.5": "2.5px",
        "3": "3px",
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
