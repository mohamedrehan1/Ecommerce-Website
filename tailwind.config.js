/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        navbar: "#2c541d",
        globalcolor1: "#2c541d",
        globalcolor2: "#74a84a",
        borderColor: "#eae9ec",
        borderColor2: "#d9d9d9",
        textColor: "#585858",
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
      screens: {
        custom: "922px", // Custom breakpoint
        vsm: "544px", // Custom breakpoint
      },
    },
  },
  plugins: [],
};
