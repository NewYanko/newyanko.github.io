/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--c-background)",
        release: "var(--c-release)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
