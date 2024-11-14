
const withMT = require("@material-tailwind/react/utils/withMT");
// 1370012736910 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});