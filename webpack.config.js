const Webpack = require("webpack");

module.exports = {
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new Webpack.default.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
};
