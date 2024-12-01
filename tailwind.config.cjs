/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        svelte: {
          DEFAULT: '#ff3e00',
          dark: '#d63600',
          light: '#ff5e29',
        },
        destructive: '#dc143c',
      },
    },
  },
  plugins: [],
};

module.exports = config;
