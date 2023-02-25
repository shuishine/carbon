const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  devServer: {
    port: 5677,
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
};