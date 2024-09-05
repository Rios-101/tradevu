import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#873BFF",
          200: "#5E01D6",
          300: "#EAECF0",
          400: "#F2F4F7",
          500: "#EEEDEB",
          600: "#F9FAFB",
          700: "#EBE4FF",
          800: "#FBFAFF",
          900: "#667085",
          901: "#344054",
          902: "#98A2B3",
          903: "#E7E9FB"
        },
        bg: {
          100: "#101828"
        }
      },
      fontSize: {
        xxs: "10px",
        mxs: "8px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
