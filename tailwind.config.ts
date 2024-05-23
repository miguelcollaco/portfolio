import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(var(--text) / <alpha-value>)',
        'background': 'rgb(var(--background) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'secondary': 'rgb(var(--secondary) / <alpha-value>)',
        'accent': 'rgb(var(--accent) / <alpha-value>)',
      },
      fontSize: {
        sm: '0.833rem',
        base: '1rem',
        xl: '1.200rem',
        '2xl': '1.440rem',
        '3xl': '1.728rem',
        '4xl': '2.074rem',
        '5xl': '2.489rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant('notFirstChild', '& > *:not(:first-child)');
    }
  ],
};
export default config;
