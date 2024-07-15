/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        578: "578px",
        "custom-length": "500px",
        "custom-length514": "514px",
        "custom-length592": "592px",
        "custom-length623": "623px",
        "custom-length428": "428px",
        "custom-length1100": "1100px",
        "custom-length1360": "1360px",
        "custom-length45%": "45%",
        "custom-length48%": "48%",
      },
      height: {
        "custom-length72": "72px",
        "custom-length360": "360px",
        "custom-length390": "390px",
        "custom-length440": "440px",
        "custom-length428": "428px",
        "custom-length": "500px",
        "custom-length514": "514px",
        "custom-length530": "530px",

        "custom-length600": "600px",
        "custom-length628": "628px",
        "custom-length672": "672px",
      },
      color: {
        red: "red",
        blue: "blue",
        head: "#3a408c",
      },
      backgroundColor: {
        "bg-color-for-prod": "#F3F3F3",
        "bg-color-for-banner": "#F8F8F8",
        "bg-color-button": "#D2D2D2",
        "bg-color-success": "#004197",
      },
      fontFamily: {
        "font-pop": "poppins, serif",
        curse: "Monotype Corsiva, cursive",
      },
      fontSize: {
        "custon-40px": "40px",
        "custon-54px": "54px",
      },
      lineHeight: {
        "custom-60px": "60px",
      },
      translate: {
        translate: "-50%",
      },
    },
  },
  plugins: [],
};
