/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6941C6",
        brand: {
          50: "#D6BBFB",
          600: "#7F56D9",
          700: "#6941C6",
        },
        secondary: {
          DEFAULT: "#F0F5FA",
          50: "#F3F3F3",
          100: "#B0B7C3",
          200: "#8A94A6",
          300: "#323B4B",
          400: "#4E5D78",
          500: "#404040",
          600: "#eeeeee",
        },
        error: "#FF5630",
        success: {
          50: "#ECFDF3",
        },
      },
      height: {
        "screen-85": "85vh",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "Input-basic":
          "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "Input-error":
          "0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "table-shadow":
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
