const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  configureWebpack: {
    entry: "./src/main.ts",
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .use("babel-loader")
      .tap((options) => {
        return {
          ...options,
          configFile: false,
          presets: [
            [
              "@vue/cli-plugin-babel/preset",
              {
                useBuiltIns: "entry",
              },
            ],
          ],
        };
      });
  },
});
