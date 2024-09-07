const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8090,
    proxy: {
      "/api/v1": {
        // Path to API from KTOR server.
        target: "http://localhost:8080", // This the default URL for the KTOR Application
        changeOrigin: true, // Required for CORS handling
      },
    },
  },
  configureWebpack: {
    devtool: "eval-source-map",
  },
});
