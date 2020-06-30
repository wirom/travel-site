const path = require("path");

const currentTask = process.env.npm_lifecycle_event;
let postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-nested"),
  require("postcss-simple-vars"),
  require("autoprefixer"),
  require("postcss-hexrgba"),
];
let cssConfig = {
  test: /\.css$/,
  use: [
    "css-loader",
    { loader: "postcss-loader", options: { plugins: postCSSPlugins } },
  ],
};

let config = {
  entry: "./app/assets/scripts/App.js",
  module: {
    rules: [cssConfig],
  },
};

if (currentTask == "dev") {
  cssConfig.use.unshift("style-loader");
  config.output = {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  };
  config.devServer = {
    before: function (app, server) {
      server._watch("/app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    port: 3000,
    host: "0.0.0.0",
  };
}

if (currentTask == "build") {
}

module.exports = config;
