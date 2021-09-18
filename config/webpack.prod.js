const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { EnvironmentPlugin } = require("webpack");

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new EnvironmentPlugin({
      API: "https://jsonplaceholder.typicode.com/posts",
    }),
  ],
};

module.exports = merge(common, prodConfig);
