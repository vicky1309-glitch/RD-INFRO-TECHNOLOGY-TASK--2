/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0B",
        surface: "#161616",
        card: "#1F1F1F",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5E6A9",
          dark: "#B8860B",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
        poppins: ["'Poppins'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      borderColor: {
        gold: "rgba(212,175,55,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        scrollLine: {
          "0%,100%": { opacity: 0, transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { opacity: 1, transform: "scaleY(1)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
