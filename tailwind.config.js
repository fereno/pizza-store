/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        blue: "#123456",
      },
      fontSize: {
        huge: ["50rem", { lineHeight: "1" }],
      },

      height: { screen: "100dvh" },
    },
  },
  plugins: [],
};
