/** @type {import('postcss').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {
      grid: true,
    },
  },
};

export default config;
