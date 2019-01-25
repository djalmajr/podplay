const getConfig = require("wprun");

const DEV = process.env.NODE_ENV === "development";
const CDN = "https://cdn.jsdelivr.net/npm";

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
    stylesheets: [
      `${CDN}/ionicons@4.5.1/dist/css/ionicons.min.css`,
      "https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400,400i,700",
    ],
  },
  externalsPluginOptions: {
    externals: [
      {
        module: "hyperhtml",
        global: "hyperHTML",
        entry: DEV ? "umd.js" : `${CDN}/hyperhtml@2.25.4/umd.js`,
      },
    ],
  },
});
