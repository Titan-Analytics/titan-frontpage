const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: "rgb(59, 6, 166)",
        purple: "#280456",
        lightpurple: "#a99abb",
      },
      fontFamily: {
        sans: ['Inter var', "IBM\\ Plex\\ Sans", "ui-sans-serif", "system-ui", ...defaultTheme.fontFamily.sans],
        mono: ["ui-monospace", "SFMono-Regular"],
        body: ["IBM\\ Plex\\ Sans"],
      },
      // spacing: {
      //   xs: "16px",
      //   sm: "2%",
      //   md: "5%",
      //   lg: "10%",
      //   xl: "15%",
      // },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "42px",
        "5xl": "3.3rem",
        "6xl": "3.5rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(255, 255, 255, 0.2), 0 2px 4px -1px rgba(255, 255, 255, 0.2)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px #FFF",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
        "white-md": "1px -2px 38px 16px rgba(255, 255, 255, 0.09)"
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
};
