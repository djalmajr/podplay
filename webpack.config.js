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
    stylesheets: ["https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css"],
  },
  externalsPluginOptions: {
    externals: [
      {
        module: "lighterhtml",
        global: "lighterhtml",
        entry: DEV ? "min.js" : "https://unpkg.com/lighterhtml",
      },
    ],
  },
});
