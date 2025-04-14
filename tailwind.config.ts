import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#7577EC",
        secondary: "#F0F0F0",
        accent: "#62929E",
        dark: "#1B1B1B",
        purplePrimary: "#5050B2",
        bluePrimary: "#202DC3",
        success: "#287f71",
        bgDisplay: "#3a3087",
        customBrown: "#A1734E",
        greenSurvei: "#0F464A",
        redPrimary: "#D32F2F",
        darkRedPrimary: "#8b0000",
        bgDisplayBrow: "#644D3E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
