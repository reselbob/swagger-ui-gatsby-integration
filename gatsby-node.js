var webpack = require("webpack");

exports.onCreateWebpackConfig = ({  actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    node: {
      fs: "empty",
    },
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
        assert: require.resolve("assert"),
      },
    },
  });
};
