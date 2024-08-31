const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  configureWebpack: {
    entry: "./src/main.ts",
  },
  transpileDependencies: true,
});
