import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1B3764",
      lightblue: "#B4C7E7",
      secondary: "#FFCA42",
      white: "#FFFFFF",
      black : '#000',
    }

  },
  plugins: [],
};
export default config;
