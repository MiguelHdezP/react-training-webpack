const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { EnvironmentPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  target: "web",
  plugins: [new EnvironmentPlugin({ API: "http://localhost:4000/movies" })],
};

module.exports = merge(common, devConfig);
