import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      navyblue: "#1B3764",
      lightblue: "#B4C7E7",
      thickyellow: "#FFCA42",
      white: "#FFFFFF",
    }

  },
  plugins: [],
};
export default config;
