import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

       animation: {
     'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
   },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
             'logo-cloud': {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(calc(-100% - 4rem))' },
             },
           }
    },
  },
  plugins: [],
};
export default config;
