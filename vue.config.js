// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/style/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        PROJECT_BUILD_DATE: JSON.stringify(new Date().toISOString()),
      }),
    ],
  },
};
