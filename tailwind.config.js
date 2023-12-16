/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--brand-600)",
          300: "var(--brand-300)",
        },
        error: {
          DEFAULT: "var(--error)",
          300: "var(--error-300)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
      },
      borderRadius: {
        xl: "var(--radius)",
        lg: "calc(var(--radius) - 2px)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        inputShadow: "var(--input-focus-shadow)",
        errorShadow: "var(--error-shadow)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
