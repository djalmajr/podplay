const getConfig = require("wprun");

const DEV = process.env.NODE_ENV === "development";

module.exports = getConfig(__dirname, {
  copyPluginOptions: [
    {
      from: "*.ico",
      to: "./",
      context: "assets",
    },
  ],
  htmlPluginOptions: {
    title: "PodPlayer",
    description: "PodPlayer",
  },
  externalsPluginOptions: {
    externals: [
      {
        module: "hyperhtml",
        global: "hyperHTML",
        entry: DEV ? "umd.js" : "https://unpkg.com/hyperhtml@2.25.3/umd.js",
      },
    ],
  },
});
